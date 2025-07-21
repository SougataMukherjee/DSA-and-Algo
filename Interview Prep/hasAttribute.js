function toggleButton(buttonId) {
  const btn = document.getElementById(buttonId);

  if (btn.hasAttribute("disabled")) {
    btn.removeAttribute("disabled");
  } else {
    btn.setAttribute("disabled", "true");
  }

  if (btn.classList.contains("active")) {
    btn.classList.remove("active");
  } else {
    btn.classList.add("active");
  }
}

toggleButton("submitBtn");
