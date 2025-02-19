class MyStack {
  // class StackNode{
  //     constructor(a){
  //         this.data = a;
  //         this.next = null;
  //     }
  // }
  constructor() {
    this.top = null;
  }

  push(a) {
    if (this.top === null) {
      this.top = new StackNode(a);
    } else {
      // creating a new temp node in the stack
      let temp = new StackNode(a);
      // assigning link part of new node to top and making it top node.
      temp.next = this.top;
      this.top = temp;
    }
  }

  pop() {
    let temp = this.top;

    // if node at temp pointer is null, the stack is empty so we return -1.
    if (temp === null) {
      return -1;
    } else {
      // storing the data at top node and deleting that node.
      temp = temp.next;
      let r = this.top.data;
      this.top = null;
      this.top = temp;

      // returning the data.
      return r;
    }
  }
}
