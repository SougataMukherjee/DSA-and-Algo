class Solution {
  constructor() {
    this.head = null;
  }

  //Function to convert a binary tree to doubly linked list.
  bToDLLUtil(root) {
    //base case for recursion.
    if (root === null) return;

    //calling function recursively to convert right subtrees.
    this.bToDLLUtil(root.right);

    //inserting root into doubly linked list.
    root.right = this.head;

    //changing left pointer of previous head.
    if (this.head !== null) this.head.left = root;

    //changing head of doubly linked list.
    this.head = root;

    //calling function recursively to convert left subtrees.
    this.bToDLLUtil(root.left);
  }

  //Function to convert a binary tree to doubly linked list and return it.
  bToDLL(root) {
    //calling the function for conversion.
    this.bToDLLUtil(root);
    return this.head;
  }
}
