let chunk = function (arr, size) {
  let res = [];
  let i = 0;
  while (i < arr.length) {
    res.push(arr.slice(i, i + size));
    i += size;
  }
  return res;
};
