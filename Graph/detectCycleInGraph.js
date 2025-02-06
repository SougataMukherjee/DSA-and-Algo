function dfs(node, parent, adj, visited) {
  visited[node] = true; // Mark the current node as visited

  for (let neighbor of adj[node]) {
    // Iterate over adjacent nodes
    if (neighbor === parent) continue; // Skip parent node

    if (visited[neighbor]) return true; // If already visited, cycle detected
    if (dfs(neighbor, node, adj, visited)) return true; // Recursive DFS call
  }

  return false;
}

function isCycle(V, adj) {
  let visited = new Array(V).fill(false); // Initialize visited array
  //detect cycle in different dfs tree
  for (let i = 0; i < V; i++) {
    if (!visited[i]) {
      // If the node is not visited, start DFS
      if (dfs(i, -1, adj, visited)) return true; // Cycle found
    }
  }

  return false; // No cycle found
}
const graph = {
  0: [1, 2],
  1: [0, 2],
  2: [0, 1, 3],
  3: [2],
};
