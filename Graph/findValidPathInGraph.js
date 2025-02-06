function validPath(n, edges, source, destination) {
  const graph = Array.from({ length: n }, () => []);
  for (const [u, v] of edges) {
    graph[u].push(v);
    graph[v].push(u);
  }

  function bfs(start) {
    let queue = [start];
    let visited = { [start]: true };

    while (queue.length > 0) {
      let node = queue.shift();

      if (node === destination) return true;

      for (let neighbor of graph[node]) {
        if (!visited[neighbor]) {
          visited[neighbor] = true;
          queue.push(neighbor);
        }
      }
    }

    return false;
  }

  return bfs(source);
}
