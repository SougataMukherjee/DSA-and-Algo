const combination = (str) => {
  const res = [];

  const helper = (current, index) => {
    if (index === str.length) {
      res.push(current);
      return;
    }

    helper(current + str[index], index + 1);
    helper(current, index + 1);
  };

  helper("", 0);

  return res;
};

const inputString = "abc";
const text = combination(inputString);

console.log(text);
