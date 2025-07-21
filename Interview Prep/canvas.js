<canvas id="canvas" width="600" height="600"></canvas>;

const canvas = document.querySelector("#canvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
ctx.fillStyle = "red";
ctx.fillRect(20, 20, 150, 150);

ctx.strokeStyle = "green";
ctx.lineWidth = 5;
ctx.strokeRect(100, 200, 150, 150);

ctx.font = "30px arial";
ctx.fillStyle = "#666";
ctx.textAlign = "center";
ctx.fillText("hello guys", 400, 50);

ctx.strokeText("new stroke", 400, 100);

ctx.beginPath();
ctx.moveTo(50, 50);
ctx.lineTo(150, 50);
ctx.lineTo(100, 200);
ctx.closePath();
ctx.strokeStyle = "coral";
ctx.stroke(); //ctx.fill()

ctx.beginPath();
ctx.rect(300, 50, 150, 100);
ctx.fillStyle = "teal";
ctx.fill();

ctx.beginPath();
ctx.arc(235, 275, 50, 0, Math.PI * 2, true);
ctx.arc(235, 275, 25, 0, Math.PI * 2, false);
ctx.fillStyle = "red";
ctx.fill();
