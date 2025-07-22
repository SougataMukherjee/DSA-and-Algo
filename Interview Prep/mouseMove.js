document.addEventListener("mousemove", (e) => {
  document.querySelector(
    "#mini_circle"
  ).style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;

  //   document.querySelector("#mini_circle").style.top = e.clientY + "px";
  //   document.querySelector("#mini_circle").style.left = e.clientX + "px";
});

document.querySelectorAll(".child").forEach((e) => {
  e.addEventListener("mouseover", () => {
    cursor.classList.remove("cursorGrow");
    cursor.innerHTML = "";
  });
});

//Q)Mouse detection app in react
import "./styles.css";
export default function App() {
  let handleMouseMove = () => {
    var eye = document.querySelectorAll(".eye");
    eye.forEach((eye) => {
      let x = eye.getBoundingClientRect().left + eye.clientWidth / 2;
      let y = eye.getBoundingClientRect().top + eye.clientHeight / 2;
      // eye.style.top = `${e.pageY}px`;
      // eye.style.left = `${e.pageX}px`;
      let radian = Math.atan2(event.pageX - x, event.pageY - y);
      let rot = radian * (180 / Math.PI) * -1 + 270;
      eye.style.transform = "rotate(" + rot + "deg)";
    });
  };
  return (
    <body onMouseMove={handleMouseMove}>
      <div className="face">
        <div className="eyes">
          <div className="eye"></div>
          <div className="eye"></div>
        </div>
      </div>
    </body>
  );
}
// body{
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   min-height: 100vh;
// }
// .face
// {
//   position: relative;
//   width: 300px;
//   height: 300px;
//   border-radius: 50%;
//   background-color: hotpink;
//   display: flex;
//   justify-content: center;
//   align-items: center;
// }
// .face::before
// {
//   content: '';
//   position: absolute;
//   top:180px;
//   width: 150px;
//   height: 70px;
//   background-color: white;
//   border-bottom-left-radius: 70px;
//   border-bottom-right-radius: 70px;
//   transition: 0.5s;
// }
// .face:hover::before
// {
//   top:210px;
//   width: 150px;
//   height: 20px;
//   background-color: white;
//   border-bottom-left-radius: 0px;
//   border-bottom-right-radius: 0px;
// }
// .eyes
// {
//   position: relative;
//   top:-70px;
//   display:flex;
// }
// .eyes .eye{
//   position: relative;
//   width: 80px;
//   height: 80px;
//   display: block;
//   margin: 0 15px;
//   border-radius:50%;
//   background-color: white;
// }
// .eyes .eye::before{
//   content: '';
//   top: 50%;
//   position: absolute;
//   left: 25px;
//   width: 40px;
//   height: 40px;
//   background-color:black;
//   border-radius: 50%;
//   translate: -50% -50%;
// }

//    <div class="container" style="height: 90vh"></div>
//     <span id="throttle" style="position: absolute; top: 0; left: 0"></span>
//     <div
//       class="pointer"
//       style="
//         position: fixed;
//         top: 0;
//         left: 0;
//         width: 30px;
//         height: 30px;
//         background: red;
//         border: 5px solid yellow;
//         border-radius: 50%;
//         filter: blur(3px);
//       "
//     ></div>
const container = document.querySelector(".container");
const pointer = document.querySelector(".pointer");
const throttleText = document.getElementById("throttle");

function onMouseMove(e) {
  const { offsetX, offsetY } = e;
  const x = offsetX - 10;
  const y = offsetY + 10;
  pointer.style.transform = `translate(${x}px, ${y}px)`;
}

function throttle(func, delay = 1000) {
  let prev = 0;
  return function (e) {
    let now = new Date().getTime();
    if (now - prev > delay) {
      prev = now;
      const x = e.clientX;
      const y = e.clientY;
      throttleText.innerText = `(${x}, ${y})`;
      func(e);
    }
  };
}

const throttledMouseMove = throttle(onMouseMove, 100);
container.addEventListener("mousemove", throttledMouseMove);
