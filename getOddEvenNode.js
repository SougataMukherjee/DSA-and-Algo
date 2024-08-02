function ListNode(value = 0, next = null) {
  return {
    value: value,
    next: next,
  };
}

function oddEvenList(head) {
  if (!head || !head.next) return head;

  let odd = head;
  let even = head.next;
  let evenHead = even;

  while (even && even.next) {
    odd.next = even.next;
    odd = odd.next;
    even.next = odd.next;
    even = even.next;
  }

  odd.next = evenHead;
  return head;
}

function printList(head) {
  let result = [];
  while (head) {
    result.push(head.value);
    head = head.next;
  }
  console.log(result.join("->"));
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

oddEvenList(node1);

printList(node1);
