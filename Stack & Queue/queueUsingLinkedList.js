// Queue using linked list
function queueUsingLL() {
  // Node
  let Node = function (elm) {
    this.element = elm;
    this.next = null;
  };

  // To keep track of the size
  let length = 0;

  // To keep track of the list
  let head = null;

  // Enqueue data in the queue
  this.enqueue = function (elm) {
    let node = new Node(elm),
      current;

    // If head is empty then add the node at the beginning
    if (head === null) {
      head = node;
    } else {
      // Else add the node as the next element of the existing list
      current = head;
      while (current.next) {
        current = current.next;
      }
      current.next = node;
    }

    // Increase the length
    length++;
  };

  // Remove the item from the queue
  this.dequeue = function () {
    let current = head;

    // If there is an item then remove it and make the next element as the first
    if (current) {
      let elm = current.element;
      current = current.next;
      head = current;
      length--;
      return elm;
    }

    return null;
  };

  // Return the first element in the queue
  this.front = function () {
    if (head) {
      return head.element;
    }

    return null;
  };

  // Return the size of the queue
  this.size = function () {
    return length;
  };

  // Check if the queue is empty
  this.isEmpty = function () {
    return length === 0;
  };
}
