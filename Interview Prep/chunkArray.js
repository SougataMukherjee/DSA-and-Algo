//chunk([1,2,3,4,5],2)=[[1,2],[3,4],[5]]
function chunk(arr, size) {
  const chunks = [];
  let i = 0;
  while (i < arr.length) {
    chunks.push(arr.slice(i, i + size));
    i += size;
  }
  return chunks;
}
console.log(chunk([1, 2, 3, 4, 5], 2));
