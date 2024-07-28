let arr = [1, 3, -5, -6],
  sArr = [];
for (let i = 0; i < arr.length; i++) {
  sArr[i] = arr[i] * arr[i];
  console.log(sArr[i]);
}

//console.log(arr.map((num)=>num*num).sort((a,b)=>a-b))

//console.log(arr.every((value,i)=>value**2===sArr[i]))
