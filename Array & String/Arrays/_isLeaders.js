//Q find all the leaders in the array
//Input: arr = [16, 17, 4, 3, 5, 2]
//Output: [17, 5, 2]
//Explanation: A leader is an element that is greater than all elements to its right. In the given array
function leaders(a) {
  let n = a.length;
  let ans = [];

  for (let i = 0; i < n; i++) {
    let j;
    for (j = i + 1; j < n; j++) {
      if (a[i] < a[j]) {
        break;
      }
    }
    if (j === n) {
      // If the loop didn't break
      ans.push(a[i]);
    }
  }

  return ans;
}
