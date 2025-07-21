function setupToggle(buttonId, targetId) {
  const button = document.getElementById(buttonId);
  const target = document.getElementById(targetId);

  if (!button || !target) return;

  button.addEventListener("click", () => {
    target.classList.toggle("active");

    const isActive = target.getAttribute("data-active") === "true";
    target.setAttribute("data-active", !isActive);
    target.setAttribute("aria-expanded", !isActive);
  });
}

setupToggle("toggleBtn", "content");
