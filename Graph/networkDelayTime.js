function networkDelayTime(times, n, k) {
  const dist = new Array(n + 1).fill(Infinity);
  dist[k] = 0;

  // Bellman-Ford algorithm
  for (let i = 0; i < n; i++) {
    for (let [u, v, w] of times) {
      if (dist[u] !== Infinity && dist[v] > dist[u] + w) {
        dist[v] = dist[u] + w;
      }
    }
  }

  // Find the maximum wait time
  let maxWait = 0;
  for (let i = 1; i <= n; i++) {
    maxWait = Math.max(maxWait, dist[i]);
  }

  // Return -1 if any node is unreachable, otherwise return maxWait
  return maxWait === Infinity ? -1 : maxWait;
}
