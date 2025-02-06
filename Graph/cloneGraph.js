var cloneGraph = function (node) {
  return dfs(node);
};
function dfs(root, visited = new Map()) {
  if (!root) return;
  if (visited.has(root)) return visited.get(root);
  const newRoot = new Node(root.val);
  visited.set(root, newRoot);
  for (let c of root.neighbors) {
    newRoot.neighbors.push(dfs(c, visited));
  }
  return newRoot;
}
