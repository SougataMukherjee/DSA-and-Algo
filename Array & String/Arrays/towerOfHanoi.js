//Find the total number of moves needed to transfer n disks in the Tower of Hanoi puzzle following the given rules
//Input: n = 2 Output: 3
//Explain: move disk 1 from rod 1 to rod 2,move disk 2 from rod 1 to rod 3,move disk 1 from rod 2 to rod 3

function towerOfHanoi(n, from, to, aux) {
  if (n === 1) {
    console.log(`Move disk 1 from ${from} to ${to}`);
    return;
  }
  // Move n-1 disks from "from" rod to "aux" rod
  towerOfHanoi(n - 1, from, aux, to);
  // Move the nth disk from "from" rod to "to" rod
  console.log(`Move disk ${n} from ${from} to ${to}`);
  // Move n-1 disks from "aux" rod to "to" rod
  towerOfHanoi(n - 1, aux, to, from);
}

const disks = 3;
towerOfHanoi(disks, "A", "C", "B");
