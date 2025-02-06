function ListNode(value = 0, next = null) {
  return {
    value: value,
    next: next,
  };
}

function getMiddle(node) {
  let slow = node;
  let fast = node;

  if (node === null) return -1;

  while (fast !== null && fast.next !== null) {
    slow = slow.next;
    fast = fast.next.next;
  }

  return slow.value;
}

// 1 -> 2 -> 3 -> 4 -> 5
const node1 = ListNode(1);
const node2 = ListNode(2);
const node3 = ListNode(3);
const node4 = ListNode(4);
const node5 = ListNode(5);

node1.next = node2;
node2.next = node3;
node3.next = node4;
node4.next = node5;

console.log(getMiddle(node1)); // 3
