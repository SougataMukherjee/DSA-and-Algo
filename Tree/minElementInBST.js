function minValue(root) {
  if (root === null) {
    return -1;
  }

  let curr = root;

  // leftmost node is minimum, so move till
  // left is not null
  while (curr.left !== null) {
    curr = curr.left;
  }

  // returning the data at the leftmost node
  return curr.data;
}
