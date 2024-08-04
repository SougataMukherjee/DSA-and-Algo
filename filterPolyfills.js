Array.prototype.myFilter = function (callback) {
  //callback will return that items if its validate conditions
  let tempArr = [];
  for (let i = 0; i < this.length; i++) {
    if (callback(this[i], i, this)) {
      //if(true) push elements to new array
      tempArr.push(this[i]);
    }
  }
  return tempArr;
};
const array = [1, 2, 3, 4, 5];
const newFArray2 = array.myFilter((item) => {
  return item > 2;
});
console.log(newFArray2);
