// Input: encoded = [1,2,3], first = 1  Output: [1,0,2,1]
let decode = function (encoded, first) {
  let result = [first];

  for (let i = 0; i < encoded.length; i++) {
    result.push(result[i] ^ encoded[i]);
  }

  return result;
};
