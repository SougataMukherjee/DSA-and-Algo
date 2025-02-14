function dfs(u, color, colors, adj) {
  // Assign color to the current u
  colors[u] = color;

  // Iterate through all adjacent vertices
  for (let v of adj[u]) {
    if (colors[v] === -1) {
      // Assign alternate color to the adjacent u
      if (!dfs(v, 1 - color, colors, adj)) return false;
    } else if (colors[v] === color) {
      // If the adjacent u has the same color, it's
      // not bipartite
      return false;
    }
  }
  return true;
}

// Function to check if the graph is Bipartite using DFS
function isBipartite(V, adj) {
  // Initialize all vertices as uncolored
  const colors = Array(V).fill(-1);

  // Check each component of the graph
  for (let i = 0; i < V; i++) {
    // If the vertex is uncolored
    if (colors[i] === -1) {
      // If DFS fails, the graph is not bipartite
      if (!dfs(i, 0, colors, adj)) return false;
    }
  }

  // All vertices can be colored bipartitely
  return true;
}

const V = 4;
const adj = Array.from({ length: V }, () => []);

adj[0].push(1);
adj[1].push(0);
adj[1].push(2);
adj[2].push(1);
adj[2].push(3);
adj[3].push(2);
adj[3].push(0);
adj[0].push(3);

//solution 2

function isBipartite(adj) {
  let V = adj.length;
  let color = new Array(V).fill(-1);

  for (let i = 0; i < V; i++) {
    if (color[i] === -1) {
      let queue = [];
      queue.push(i);
      color[i] = 0;

      while (queue.length > 0) {
        let u = queue.shift();
        for (let v of adj[u]) {
          if (color[v] === -1) {
            color[v] = 1 - color[u];
            queue.push(v);
          } else if (color[v] === color[u]) {
            return false;
          }
        }
      }
    }
  }
  return true;
}
