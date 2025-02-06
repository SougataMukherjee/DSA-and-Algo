function canVisitAllNodes(arr, X, n) {
  let queue = [];
  let visited = new Array(n).fill(false);
  queue.push(X);
  visited[X] = true;
  let count = 0;

  // Loop to implement BFS
  while (queue.length > 0) {
    let size = queue.length;
    for (let i = 0; i < size; i++) {
      let curr = queue.shift();
      count++;
      for (let j of arr[curr]) {
        if (visited[j] == false) {
          queue.push(j);
          visited[j] = true;
        }
      }
    }
  }

  // Check if all nodes are visited
  if (count == n) return true;
  return false;
}
let arr = [[1, 2], [0, 3, 2], [0, 1], [1]];
let N = 4,
  X = 0;
console.log(canVisitAllNodes(arr, X, N));
