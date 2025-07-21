const draggable = document.getElementById("draggable");
const dropzone = document.getElementById("dropzone");
dropzone.addEventListener("dragover", (e) => {
  e.preventDefault();
  dropzone.style.background = "#f0f0f0";
});
dropzone.addEventListener("dragleave", () => {
  dropzone.style.background = "";
});
dropzone.addEventListener("drop", (e) => {
  e.preventDefault();
  dropzone.style.background = "";
  dropzone.appendChild(draggable);
});
