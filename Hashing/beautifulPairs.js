function beautifulPairs(A, B) {
  let count = 0;
  let visited = new Array(B.length).fill(false); // To track matched elements in B

  if (A.length === 1) return count;

  for (let i = 0; i < A.length; i++) {
    for (let j = 0; j < B.length; j++) {
      if (A[i] === B[j] && !visited[j]) {
        // If A[i] is found in B and not already used
        count++;
        visited[j] = true; // Mark this element as used
        break;
      }
    }
  }

  return count < A.length ? count + 1 : A.length - 1;
}
