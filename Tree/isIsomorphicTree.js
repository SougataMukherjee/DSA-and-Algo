function isIsomorphic(root1, root2) {
  if (root1 === null && root2 === null) return true;

  // Exactly one of the root1 and root2 is NULL, trees not isomorphic
  if (root1 === null || root2 === null) return false;

  if (root1.data !== root2.data) return false;

  // There are two possible cases for root1 and root2 to be isomorphic
  // Case 1: The subtrees rooted at these nodes have NOT been "Flipped".
  // Both of these subtrees have to be isomorphic, hence the &&
  // Case 2: The subtrees rooted at these nodes have been "Flipped"
  return (
    (this.isIsomorphic(root1.left, root2.left) &&
      this.isIsomorphic(root1.right, root2.right)) ||
    (this.isIsomorphic(root1.left, root2.right) &&
      this.isIsomorphic(root1.right, root2.left))
  );
}
