let arr = [1, 2, 0, 0, 2, 1],
  result = [];
//method 1
//   console.log([...new Set(arr)])

//method 2
for (let i = 0; i < arr.length; i++) {
  //check consecutively and remove last element if it's same else add current element
  if (arr[i] === arr[i + 1]) {
    //arr[i]===arr[j]&& (i!=j)
    result.pop();
  } else {
    result.push(arr[i]);
  }

  //if you want to remove all the adjacent duplicate
  if (arr[i] !== result[result.length - 1]) {
    result.push(arr[i]);
  }
}

console.log(result);
