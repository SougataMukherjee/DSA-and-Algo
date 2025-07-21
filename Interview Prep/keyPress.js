document.querySelectorAll(".row .seat.selected").forEach((code, idx) => {
  code.addEventListener("keydown", (e) => {
    if (e.key >= 0 && e.key <= 9) {
      // Number key pressed
      h1.textContent = "number";
    } else {
      // Other key pressed
      h1.textContent = e.key;
    }
  });
});
