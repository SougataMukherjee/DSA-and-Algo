class QueueStack {
  constructor() {
    this.q1 = new Queue();
    this.q2 = new Queue();
  }

  push(x) {
    while (!this.q1.empty()) {
      let k = this.q1.front_ele();

      //popping element from first queue.
      this.q1.pop();

      //pushing it into second queue.
      this.q2.push(k);
    }

    //q1 is empty now and we push the given number into first queue.
    this.q1.push(x);

    //while second queue is not empty, we keep popping the front element
    //from second queue and storing that element in first queue.
    while (!this.q2.empty()) {
      let k = this.q2.front_ele();
      //popping element from second queue.
      this.q2.pop();

      //pushing it into first queue.
      this.q1.push(k);
    }
  }

  pop() {
    if (!this.q1.empty()) {
      //we store the front element from the queue in a
      //variable and pop that element.
      let r = this.q1.front_ele();
      this.q1.pop();

      //returning the popped element.
      return r;
    }
    //else we return -1.
    return -1;
  }
}
