import { useEffect, useRef, type ReactNode } from "react";

const SPACING = 14;
const RADIUS = 130;
const PUSH = 2;
const DOT_R = 0.5;
const BASE_ALPHA = 0.2;
const GLOW_ALPHA = 0.95;
const LERP = 0.5; // speed while mouse is moving
const LEAVE_LERP = 0.5; // slower drift when mouse leaves

// "push" | "glow" | "both"
type DotMode = "push" | "glow" | "both";

interface Dot {
  x: number;
  y: number;
}

interface DotBackgroundProps {
  children: ReactNode;
  mode?: DotMode; // default: "both"
}

export default function DotBackground({
  children,
  mode = "both",
}: DotBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouse = useRef<{ x: number; y: number }>({ x: -999, y: -999 });
  const smooth = useRef<{ x: number; y: number }>({ x: -999, y: -999 });
  const dots = useRef<Dot[]>([]);
  const raf = useRef<number>(0);
  const isInside = useRef<boolean>(false);
  const leaveTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    function buildDots(W: number, H: number) {
      dots.current = [];
      const cols = Math.ceil(W / SPACING) + 2;
      const rows = Math.ceil(H / SPACING) + 2;
      for (let r = 0; r < rows; r++)
        for (let c = 0; c < cols; c++)
          dots.current.push({ x: c * SPACING, y: r * SPACING });
    }

    function resize() {
      console.log("the screen has rezied ");

      canvas!.width = window.innerWidth;
      canvas!.height = window.innerHeight;
      buildDots(canvas!.width, canvas!.height);
    }

    function draw() {
      const W = canvas!.width;
      const H = canvas!.height;
      ctx!.clearRect(0, 0, W, H);

      // Use slower lerp when mouse has left — smooth return to rest
      const lerpSpeed = isInside.current ? LERP : LEAVE_LERP;
      smooth.current.x += (mouse.current.x - smooth.current.x) * lerpSpeed;
      smooth.current.y += (mouse.current.y - smooth.current.y) * lerpSpeed;

      const { x: sx, y: sy } = smooth.current;

      for (const d of dots.current) {
        const dx = d.x - sx;
        const dy = d.y - sy;
        const dist = Math.sqrt(dx * dx + dy * dy);
        const force = Math.max(0, 1 - dist / RADIUS);

        // Push: displace dot away from cursor
        let drawX = d.x;
        let drawY = d.y;
        if (mode !== "glow") {
          drawX = d.x + (dist > 0 ? (dx / dist) * PUSH * force : 0);
          drawY = d.y + (dist > 0 ? (dy / dist) * PUSH * force : 0);
        }

        // Glow: brighten dot based on proximity
        const alpha =
          mode !== "push"
            ? BASE_ALPHA + (GLOW_ALPHA - BASE_ALPHA) * force
            : BASE_ALPHA + 0.15 * force; // subtle highlight even in push-only

        const size = DOT_R + (mode !== "push" ? 0.5 * force : 0);

        ctx!.beginPath();
        ctx!.arc(drawX, drawY, size, 0, Math.PI * 2);
        ctx!.fillStyle = `rgba(255,255,255,${alpha.toFixed(100)})`;
        ctx!.fill();
      }

      raf.current = requestAnimationFrame(draw);
    }

    function onMouseMove(e: MouseEvent) {
      console.log("the mouse has enter ");

      mouse.current = { x: e.clientX, y: e.clientY };
      isInside.current = true;
      if (leaveTimer.current) clearTimeout(leaveTimer.current);
    }

    function onMouseLeave() {
      console.log("the mouse has leaved ");

      // isInside.current = false;
      // // Drift the smooth target to center, then after delay park it off-screen
      // mouse.current = {
      //   x: canvas!.width / 2,
      //   y: canvas!.height / 2,
      // };
      // leaveTimer.current = setTimeout(() => {
      //   if (!isInside.current) {
      //     mouse.current = { x: -999, y: -999 };
      //   }
      // }, 900);
      mouse.current = { x: -999, y: -999 };
    }

    resize();
    draw();
    window.addEventListener("resize", resize);
    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseout", onMouseLeave);

    // remove right click menu
    const handleContextMenu = (e: MouseEvent) => e.preventDefault();
    document.addEventListener("contextmenu", handleContextMenu);

    // remove F12 open conosle log  trigger
    const handleKeyDown = (e: KeyboardEvent) => {
      if (
        e.key === "F12" ||
        (e.ctrlKey && e.shiftKey && ["I", "J", "C"].includes(e.key)) ||
        (e.ctrlKey && e.key === "U") // view source
      ) {
        e.preventDefault();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      cancelAnimationFrame(raf.current);
      if (leaveTimer.current) clearTimeout(leaveTimer.current);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseout", onMouseLeave);
      // remove right click menu trigger
      document.removeEventListener("contextmenu", handleContextMenu);
      // remove F12 open conosle log  trigger
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [mode]);

  return (
    <div
      style={{
        position: "absolute",
        minHeight: "100vh",
        minWidth: "100vw",
        background: "#111111f5",
      }}
    >
      <canvas
        ref={canvasRef}
        style={{
          position: "fixed",
          inset: 0,
          zIndex: 0,
          pointerEvents: "none",
        }}
      />
      <div style={{ position: "relative", zIndex: 1 }}>{children}</div>
    </div>
  );
}
