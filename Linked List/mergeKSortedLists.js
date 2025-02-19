function mergeKLists(arr) {
  let ans = [];

  for (let head of arr) {
    while (head) {
      ans.push(head.data);
      head = head.next;
    }
  }

  ans.sort((a, b) => a - b);

  let dummy = new Node(-1);
  let current = dummy;

  for (let val of ans) {
    current.next = new Node(val);
    current = current.next;
  }

  return dummy.next;
}
