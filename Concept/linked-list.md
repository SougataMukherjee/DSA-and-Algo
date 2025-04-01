# Linked List

A linked list is a linear data structure where each element (called a node) contains two main parts:

`Data`: The value or information stored in the node.<br>
`Next` (in Singly Linked List) or Next and Prev (in Doubly Linked List): Pointers to the next node in the sequence (and previous node for doubly linked list).<br>

### list vs linked list

A list is a linear collection of elements stored in contiguous memory locations (e.g. an array).

A linked list is a linear data structure where elements (nodes) are connected via pointers, allowing dynamic memory allocation

### ArrayList vs LinkedList

| ArrayList                                                           | LinkedList                                                             |
| ------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| ArrayList internally uses a dynamic array to store the elements.    | LinkedList internally uses a doubly linked list to store the elements. |
| Manipulation with ArrayList is slow.                                | Manipulation with LinkedList is faster.                                |
| ArrayList is better for storing and accessing data.                 | LinkedList is better for manipulating data.                            |
| The memory location for the elements of an ArrayList is contiguous. | The location for the elements of a LinkedList is not contiguous.       |

### Limitations of Arrays

#### Fixed Size:

The size of an array is fixed at the time of its creation.

#### Contiguous Memory Allocation:

Arrays store elements in contiguous memory locations, leading to inefficient insertions and deletions (since shifting elements is required).

#### Time Complexity:

Insert and delete operations are costly in terms of time complexity. Insertion or deletion at the beginning or in the middle of the array takes O(n) time.

#### Memory Wastage:

Arrays may also waste memory if allocated space is more than needed, or they may require resizing when they became full.

### Advantages of Linked Lists

Dynamic Size: Linked lists don’t have a fixed size, and memory is allocated dynamically as elements are added.
Efficient Insertions/Deletions: Insertions and deletions can be performed more efficiently in linked lists, especially at the beginning or middle of the list (without needing to shift other elements).

# Singly Linked List

In a singly linked list, each node contains:

`Data`: The value of the node.
`Next`: A pointer to the next node in the list (null for the last node).

![linked list](../img/linked-list.png)<br>

```
// Node class for single linked list
class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

// Insert at the head of the list
function insertAtHead(head, x) {
    let newNode = new Node(x);
    newNode.next = head;
    return newNode; // New head
}

// Insert at the tail of the list
function insertAtTail(head, x) {
    let newNode = new Node(x);
    if (head === null) return newNode; // If list is empty, return new node as head

    let temp = head;
    while (temp.next !== null) {
        temp = temp.next;
    }
    temp.next = newNode;
    return head;
}

// Insert at a specific index (1-based index)
function insertAtIndex(head, idx, x) {
    if (idx < 1) {
        console.error("Invalid index");
        return head;
    }

    let newNode = new Node(x);
    if (idx === 1) {
        newNode.next = head;
        return newNode; // New head
    }

    let temp = head;
    for (let i = 1; i < idx - 1; i++) {
        if (temp === null) {
            console.error("Index out of bounds");
            return head;
        }
        temp = temp.next;
    }

    if (temp === null) {
        console.error("Index out of bounds");
        return head;
    }

    newNode.next = temp.next;
    temp.next = newNode;
    return head;
}

// Delete the head node
function deleteAtHead(head) {
    if (head === null) {
        console.error("List is empty, nothing to delete.");
        return null;
    }
    return head.next; // New head
}

// Delete the tail node
function deleteAtTail(head) {
    if (head === null || head.next === null) {
        return null; // Empty list or single node case
    }

    let temp = head;
    while (temp.next.next !== null) {
        temp = temp.next;
    }
    temp.next = null; // Remove last node
    return head;
}

// Delete a node at a specific index (1-based index)
function deleteAtIndex(head, idx) {
    if (idx < 1 || head === null) {
        console.error("Invalid index or empty list.");
        return head;
    }

    if (idx === 1) return head.next; // Delete the head node

    let temp = head;
    for (let i = 1; i < idx - 1; i++) {
        if (temp === null || temp.next === null) {
            console.error("Index out of bounds");
            return head;
        }
        temp = temp.next;
    }

    if (temp.next === null) {
        console.error("Index out of bounds");
        return head;
    }

    temp.next = temp.next.next; // Bypass the node to delete
    return head;
}

// Print the linked list
function printList(head) {
    let temp = head;
    let result = [];
    while (temp !== null) {
        result.push(temp.data);
        temp = temp.next;
    }
    console.log(result.join(" -> "));
}

// Example usage
let head = null;
head = insertAtHead(head, 3);
head = insertAtHead(head, 2);
head = insertAtHead(head, 1);
head = insertAtTail(head, 4);
head = insertAtIndex(head, 3, 99);
printList(head); // 1 -> 2 -> 99 -> 3 -> 4

head = deleteAtHead(head);
printList(head); // 2 -> 99 -> 3 -> 4

head = deleteAtTail(head);
printList(head); // 2 -> 99 -> 3

head = deleteAtIndex(head, 2);
printList(head); // 2 -> 3

```

### Null Pointer Dereference in Linked List

A null pointer dereference in a linked list in JavaScript happens when you try to access a property on null or undefined:

```javascript
let current = head;
while (current !== null) {
  current = current.next;
}
console.log(current.data); // Throws error
```

# Doubly Linked List

In a doubly linked list, each node contains:

`Data`: The value of the node.<br>
`Next`: A pointer to the next node.<br>
`Prev`: A pointer to the previous node.<br>

![double linked list](../img/dubly-ll.png)<br>

```
class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
        this.prev = null;
    }
}
function insertAtHead(head, x) {
    let newNode = new Node(x);
    if (head !== null) {
        newNode.next = head;
        head.prev = newNode;
    }
    head = newNode;
    return head;
}
function insertAtTail(head, x) {
    let newNode = new Node(x);
    if (head === null) {
        // If the list is empty, the new node becomes the head
        return newNode;
    }
    let temp = head;
    while (temp.next !== null) {
        temp = temp.next;
    }
    temp.next = newNode;
    newNode.prev = temp;
    return head;
}
function insertAtIndex(head, idx, x) {
    if (idx < 1) {
        console.error("Invalid index");
        return head;
    }
    let newNode = new Node(x);
    if (idx === 1) {
        return insertAtHead(head, x);
    }
    let temp = head;
    for (let i = 1; i < idx - 1; i++) {
        if (temp === null) {
            console.error("Index out of bounds");
            return head;
        }
        temp = temp.next;
    }
    if (temp === null) {
        console.error("Index out of bounds");
        return head;
    }
    let nextNode = temp.next;
    temp.next = newNode;
    newNode.prev = temp;
    newNode.next = nextNode;
    if (nextNode !== null) {
        nextNode.prev = newNode;
    }
    return head;
}
function deleteAtHead(head) {
    if (head === null) {
        console.error("List is empty, nothing to delete.");
        return null;
    }
    let temp = head;
    head = head.next; // Move head to the next node
    if (head !== null) {
        head.prev = null; // Update the new head's previous pointer
    }
    temp.next = null; // Detach the deleted node completely
    return head;
}
```

# Circular Linked list

A circular linked list is a special type of linked list where all the nodes are connected to form a circle. Unlike a regular linked list, which ends with a node pointing to NULL, the last node in a circular linked list points back to the first node<br>
![circular linked list](../img/circular-linked-list.png)<br>

```js
class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}
```
