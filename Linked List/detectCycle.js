function ListNode(value = 0, next = null) {
  return {
    value: value,
    next: next,
  };
}

function detectLoop(head) {
  if (!head) return false;

  let fast = head;
  let slow = head;

  while (fast && fast.next) {
    fast = fast.next.next;
    slow = slow.next;

    if (fast === slow) {
      return true; // Cycle detected
    }
  }

  return false; // No cycle
}

function removeLoop(head) {
  if (!head) return;

  let fast = head,
    slow = head;

  while (fast && fast.next) {
    fast = fast.next.next;
    slow = slow.next;

    if (fast === slow) {
      // Loop detected, now remove it
      slow = head;

      if (fast === slow) {
        // Case when loop starts from head
        while (fast.next !== slow) {
          fast = fast.next;
        }
      } else {
        while (slow.next !== fast.next) {
          slow = slow.next;
          fast = fast.next;
        }
      }

      fast.next = null; // Break the loop
      return true; // Loop removed successfully
    }
  }

  return false;
}
const node1 = new ListNode(1);
const node2 = new ListNode(2);
const node3 = new ListNode(3);
const node4 = new ListNode(4);
const node5 = new ListNode(5);

node1.next = node2;
node2.next = node3;
node3.next = node4;
node4.next = node5;
node5.next = node3;
console.log(detectLoop(node1));
