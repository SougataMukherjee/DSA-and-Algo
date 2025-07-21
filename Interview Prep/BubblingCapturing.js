<div id="grandparent">
  Grandparent
  <div id="parent">
    Parent
    <div id="child">Child</div>
  </div>
</div>;
const grandparent = document.getElementById("grandparent");
const parent = document.getElementById("parent");
const child = document.getElementById("child");

grandparent.addEventListener(
  "click",
  () => {
    console.log("Grandparent - Capturing");
  },
  true
);

parent.addEventListener(
  "click",
  () => {
    console.log("Parent - Capturing");
  },
  true
);

child.addEventListener("click", () => {
  console.log("Child - Target");
});

parent.addEventListener("click", () => {
  console.log("Parent - Bubbling");
});

grandparent.addEventListener("click", () => {
  console.log("Grandparent - Bubbling");
});
