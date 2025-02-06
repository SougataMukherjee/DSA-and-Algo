let MyStack = function () {
  this.q = [];
};

MyStack.prototype.push = function (x) {
  this.q.push(x);
};

MyStack.prototype.pop = function () {
  return this.q.pop();
};

MyStack.prototype.top = function () {
  if (this.q.length == 0) {
    return -1;
  }
  return this.q[this.q.length - 1];
};

MyStack.prototype.empty = function () {
  if (this.q.length == 0) {
    return true;
  } else {
    return false;
  }
};
