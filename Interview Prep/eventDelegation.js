document.querySelector("#parent").addEventListener("click", (e) => {
  // e.stopPropagation(); // Prevents bubbling
  if (e.target.matches(".child")) {
    const count = parseInt(count.innerText);
    text.innerText = `${count}`;
    console.log("Child clicked:", e.target);
  }
});
