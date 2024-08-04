let x = [];
let y = [];
let z = x + y;
console.log(typeof z); //string
console.log(1 < 2 < 3, 3 > 2 > 1); //true false
console.log("hi" === `hi`, "hi" === `hi`); //both true
console.log(("hi" === `hi`) === "hi"); //false left to right checking true!='hi'
console.log([1, 2] + [3, 4]); //1,23,4
console.log(1 + +2); //  3
console.log(1 + "2"); // 12
console.log(1 - "2"); // -1
console.log(1 + +"2"); //  3
console.log("1" + +2); //  12
console.log(1 + true); //   2
console.log(typeof null); //  object
console.log(typeof undefined); // undefined
console.log(null == undefined && null >= 0 && null <= 0); // t
console.log(0 == false && "" == false && [] == false); // t

console.log("before");
for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 1); //3 3 3
}
console.log("after");

console.log("before");
for (let i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 1); //0 1 2
}
console.log("after");
