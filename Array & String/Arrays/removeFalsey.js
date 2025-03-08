let arr = [23, 0, "gfg", false, true, NaN, 12, "hi", undefined, [], ""];
function removeFalsey(arr) {
  // Return the first parameter of the callback function
  return arr.filter((val) => val);
}

console.log(removeFalsey(arr));
