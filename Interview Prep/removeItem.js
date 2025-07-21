function removeLastItemType1() {
  const lastItem = list.lastElementChild;
  lastItem.remove();
}
function removeLastItemType2() {
  const list = document.getElementById("myList");
  if (list.hasChildNodes()) {
    list.removeChild(list.children[n - 1]);
  }
}
