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
