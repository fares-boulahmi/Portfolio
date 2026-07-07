/* Dot Background — canvas dot grid with cursor push/glow, theme-reactive.
   Reads the --text CSS variable so dot color always matches the active
   light/dark theme automatically. No build step, no dependencies. */

(function () {
  const SPACING = 14;
  const RADIUS = 130;
  const PUSH = 2;
  const DOT_R = 0.5;
  const BASE_ALPHA = 0.2;
  const GLOW_ALPHA = 0.95;
  const LERP = 0.5;
  const LEAVE_LERP = 0.5;
  const MODE = "both"; // "push" | "glow" | "both"

  function hexToRgb(hex) {
    const clean = hex.trim().replace("#", "");
    const full =
      clean.length === 3
        ? clean
            .split("")
            .map((c) => c + c)
            .join("")
        : clean;
    const bigint = parseInt(full, 16);
    return { r: (bigint >> 16) & 255, g: (bigint >> 8) & 255, b: bigint & 255 };
  }

  function initDotBackground(containerId = "dot-bg") {
    const container = document.getElementById(containerId);
    if (!container) return;

    const canvas = document.createElement("canvas");
    canvas.style.position = "fixed";
    canvas.style.inset = "0";
    canvas.style.zIndex = "0";
    canvas.style.pointerEvents = "none";
    container.prepend(canvas);
    const ctx = canvas.getContext("2d");

    const mouse = { x: -999, y: -999 };
    const smooth = { x: -999, y: -999 };
    let dots = [];
    let raf = 0;
    let isInside = false;
    let dotColor = { r: 255, g: 255, b: 255 };

    function readThemeColor() {
      const styles = getComputedStyle(document.documentElement);
      const hex = styles.getPropertyValue("--text").trim() || "#e4e6ee";
      dotColor = hexToRgb(hex);
    }

    function buildDots(W, H) {
      dots = [];
      const cols = Math.ceil(W / SPACING) + 2;
      const rows = Math.ceil(H / SPACING) + 2;
      for (let r = 0; r < rows; r++)
        for (let c = 0; c < cols; c++)
          dots.push({ x: c * SPACING, y: r * SPACING });
    }

    function resize() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      buildDots(canvas.width, canvas.height);
    }

    function draw() {
      const W = canvas.width;
      const H = canvas.height;
      ctx.clearRect(0, 0, W, H);

      const lerpSpeed = isInside ? LERP : LEAVE_LERP;
      smooth.x += (mouse.x - smooth.x) * lerpSpeed;
      smooth.y += (mouse.y - smooth.y) * lerpSpeed;

      const { r, g, b } = dotColor;

      for (const d of dots) {
        const dx = d.x - smooth.x;
        const dy = d.y - smooth.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        const force = Math.max(0, 1 - dist / RADIUS);

        let drawX = d.x;
        let drawY = d.y;
        if (MODE !== "glow") {
          drawX = d.x + (dist > 0 ? (dx / dist) * PUSH * force : 0);
          drawY = d.y + (dist > 0 ? (dy / dist) * PUSH * force : 0);
        }

        const alpha =
          MODE !== "push"
            ? BASE_ALPHA + (GLOW_ALPHA - BASE_ALPHA) * force
            : BASE_ALPHA + 0.15 * force;

        const size = DOT_R + (MODE !== "push" ? 0.5 * force : 0);

        ctx.beginPath();
        ctx.arc(drawX, drawY, size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${r},${g},${b},${alpha.toFixed(3)})`;
        ctx.fill();
      }

      raf = requestAnimationFrame(draw);
    }

    function onMouseMove(e) {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
      isInside = true;
    }
    function onMouseLeave() {
      mouse.x = -999;
      mouse.y = -999;
      isInside = false;
    }

    readThemeColor();
    resize();
    draw();

    window.addEventListener("resize", resize);
    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseout", onMouseLeave);

    // Re-reads dot color the instant your theme toggle flips data-theme
    const observer = new MutationObserver(readThemeColor);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["data-theme"],
    });

    window.addEventListener("beforeunload", () => {
      cancelAnimationFrame(raf);
      observer.disconnect();
    });
  }

  document.addEventListener("DOMContentLoaded", () => initDotBackground());
})();
