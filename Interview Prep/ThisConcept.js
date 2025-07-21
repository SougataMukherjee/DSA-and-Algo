const user = {
  fname: "Sam",
  lname: "Muk",
  printName() {
    return `${this.fname} ${this.lname}`;
  },
};
const user2 = {
  fname: "Rupai",
  lname: "Muk",
};
const print = user.printName.bind(user2);
console.log(print(), "\n", user.printName.call(user2));
