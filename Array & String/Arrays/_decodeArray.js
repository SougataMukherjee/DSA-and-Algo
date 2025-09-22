//You are given an integer array encoded of length n - 1.
//You are also given an integer first, the first element of the original array.
//Return the original array arr of length n that satisfies:
//encoded[i] = arr[i] ^ arr[i + 1] for i from 0 to n - 2.
// Input: encoded = [1,2,3], first = 1  Output: [1,0,2,1]
let decode = function (encoded, first) {
  let result = [first];

  for (let i = 0; i < encoded.length; i++) {
    result.push(result[i] ^ encoded[i]);
  }

  return result;
};
