const toggleBtn = () => {
  let element = document.querySelector(".sub-title span:nth-child(even)");
  let ele2 = document.querySelectorAll(...[".myClass"]); //better spread for create copy,its same as querySelectorAll(".myClass")
  if (ref.current.classList.contains("sidebar")) {
    ref.current.classList.remove("sidebar");
    ele2.classList.add("nav");
    element.style.color = "#fff";
  } else {
    ref.current.classList.add("sidebar");
    ele2.classList.add("nav");
    element.style.color = "#000";
  }
};
