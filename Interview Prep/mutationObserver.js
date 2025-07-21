//    <ul id="itemList">
//         <li>Item 1</li>
//         <li>Item 2</li>
//     </ul>

//     <button id="addItem">Add Item</button>

const targetNode = document.getElementById("itemList");
const addItemBtn = document.getElementById("addItem");
const callback = function (mutationsList, observer) {
  for (let mutation of mutationsList) {
    if (mutation.type === "childList") {
      console.log("A child node has been added or removed.");
    }
  }
};
const observer = new MutationObserver(callback);
const config = { childList: true };
observer.observe(targetNode, config);
addItemBtn.addEventListener("click", function () {
  const newItem = document.createElement("li");
  newItem.textContent = `Item ${targetNode.children.length + 1}`;
  targetNode.appendChild(newItem);
});
