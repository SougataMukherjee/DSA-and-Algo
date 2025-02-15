let MyQueue = function () {
  this.s1 = []; //stack 1
  this.s2 = []; //stack 2
};
//constructor(){
//  this.s1 = new Stack();
//  this.s2 = new Stack();
//}

MyQueue.prototype.push = function (x) {
  while (this.s1.length > 0) {
    this.s2.push(this.s1.pop());
  }
  this.s1.push(x);
  while (this.s2.length > 0) {
    this.s1.push(this.s2.pop());
  }
};

MyQueue.prototype.pop = function () {
  return this.s1.pop();
};

MyQueue.prototype.peek = function () {
  return this.s1[this.s1.length - 1];
};

MyQueue.prototype.empty = function () {
  return this.s1.length === 0;
};
