// Create canvas for favicon
const canvas = document.createElement("canvas");
canvas.width = 64;
canvas.height = 64;
const ctx = canvas.getContext("2d");

// Function to draw the icon
function drawIcon(showLine) {
  ctx.clearRect(0, 0, 64, 64);

  // Draw bold F
  ctx.font = "bold 52px Arial, sans-serif";
  ctx.fillStyle = "#6ee7b7";
  ctx.textBaseline = "top";
  ctx.fillText("F", 0, 8);

  // Draw vertical line if showLine is true
  if (showLine) {
    ctx.beginPath();
    ctx.moveTo(48, 12); // Start at top
    ctx.lineTo(48, 50); // End at bottom
    ctx.strokeStyle = "#6ee7b7";
    ctx.lineWidth = 8;
    ctx.stroke();
  }

  // Update favicon
  const link = document.getElementById("dynamicFavicon");
  link.href = canvas.toDataURL("image/png");
}

// Animation: vertical line disappears and reappears every 1.5 seconds
let showLine = true;
const statusEl = document.getElementById("status");
const lineIndicator = document.getElementById("lineIndicator");

setInterval(() => {
  showLine = !showLine;
  drawIcon(showLine);

  // Update status text
  if (showLine) {
    statusEl.textContent = "● Line visible";
    lineIndicator.style.opacity = "1";
  } else {
    statusEl.textContent = "○ Line hidden";
    lineIndicator.style.opacity = "0.2";
  }
}, 1000);

// Draw initial icon with line visible
drawIcon(true);
statusEl.textContent = "● Line visible";
