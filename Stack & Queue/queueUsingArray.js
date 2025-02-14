let front = 0;
let rear = 0;
let arr = new Array(1000);
function push(x) {
  arr[rear++] = x;
}

function pop() {
  if (front == rear) return -1;

  //else we return the element at front.
  return arr[front++];
}
