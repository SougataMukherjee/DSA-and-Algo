const MAX_CAP = 10;
let stackArray = new Array(MAX_CAP);
let topIndex = -1;

function push(character) {
  if (isFull()) {
    console.log("Stack is full");
  } else {
    //first increase top then insert the data
    stackArray[++topIndex] = character;
  }
}

function pop() {
  if (isEmpty()) {
    console.log("Stack is empty");
    return null;
  } else {
    //first sore that stack value in temp variable then top--
    let temp = stackArray[topIndex];
    topIndex--;
    return temp;
  }
}

function isEmpty() {
  return topIndex === -1;
}

function isFull() {
  return topIndex >= MAX_CAP - 1;
}

//solution 2
MyStack.prototype.push = function (x) {
  this.top++;
  this.arr[this.top] = x;
};

MyStack.prototype.pop = function () {
  if (this.top == -1) return -1;
  let x = this.arr[this.top];
  this.top--;
  return x;
};
