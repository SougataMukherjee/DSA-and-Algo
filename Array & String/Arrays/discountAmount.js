let amount = Number(input);
let dis;

if (amount > 0 && amount <= 5000) {
  dis = 0;
} else if (amount > 5000 && amount <= 7000) {
  dis = 5;
} else if (amount > 7000 && amount <= 9000) {
  dis = 10;
} else {
  dis = 20;
}

console.log(amount - Math.floor((dis * amount) / 100));
