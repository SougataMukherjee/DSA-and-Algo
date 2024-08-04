if (!Array.prototype.map) {
  //if browser not support map() use your map logic
  Array.prototype.map = function (callback) {
    //callback will pass function which return item*2
    //let tempArr=[];//in forEach no need to do this
    for (let i = 0; i < this.length; i++) {
      //tempArr.push(callback(this[i],i,this)); //pushing currentValue, index, array
      callback(this[i], i, this);
    }
    return tempArr;
  };
}

const num = [1, 2, 3, 4];
//here call map and pass through callback
const multiply = num.map((item) => {
  return item * 2;
});
console.log(multiply);
