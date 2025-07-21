{
  /* <div id="circle1" style="position:absolute;width:100px;height:100px;border-radius:50%"></div>
    <div id="circle2" style="position:absolute;width:100px;height:100px;border-radius:50%"></div> */
}
const circle1 = {
  x: 200,
  y: 100,
  radius: 50,
  element: document.querySelector("#circle1"),
};
const circle2 = {
  x: 200,
  y: 200,
  radius: 50,
  element: document.querySelector("#circle2"),
};

function checkCollision() {
  const dx = circle2.x - circle1.x;
  const dy = circle2.y - circle1.y;
  const distance = Math.sqrt(dx * dx + dy * dy);
  const isColliding = distance <= circle1.radius + circle2.radius;
  Object.assign(circle1.element.style, {
    border: isColliding ? "2px solid red" : "2px solid transparent",
    background: isColliding ? "none" : "red",
    left: `${circle1.x}px`,
    top: `${circle1.y}px`,
  });

  Object.assign(circle2.element.style, {
    border: isColliding ? "2px solid yellow" : "2px solid transparent",
    background: isColliding ? "none" : "yellow",
    left: `${circle2.x}px`,
    top: `${circle2.y}px`,
  });
}

checkCollision();
