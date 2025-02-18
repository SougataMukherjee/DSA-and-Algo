function insert(node, key) {
  if (node === null) return new Node(key);

  // if given data is less than data at the current node, we call the
  // function recursively to insert new node in left subtree.
  if (key < node.data) node.left = this.insert(node.left, key);
  // else if given data is more than data at the current node, we call the
  // function recursively to insert new node in right subtree.
  else if (key > node.data) node.right = this.insert(node.right, key);

  return node;
}
