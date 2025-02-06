function allPathsSourceTarget(graph) {
  const target = graph.length - 1;
  const paths = [];

  function dfs(node, path = []) {
    path.push(node);
    //when current and target equal print the valid path
    if (node === target) {
      paths.push([...path]);
    } else {
      // Neighbor traversal
      for (let neighbor of graph[node]) {
        dfs(neighbor, path);
      }
    }

    path.pop(); // Backtrack
  }

  dfs(0, []); // Start DFS from node 0
  return paths;
}

console.log(allPathsSourceTarget([[1, 2], [3], [3], []]));
