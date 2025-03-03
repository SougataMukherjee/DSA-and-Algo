const frequencySort = function (s) {
  const frequency = s.split("").reduce((a, b) => {
    a[b] ? a[b]++ : (a[b] = 1);
    return a;
  }, {});

  const sortedCharactersArr = Object.keys(frequency).sort((a, b) => {
    if (frequency[a] > frequency[b]) {
      return -1;
    }

    if (frequency[a] < frequency[b]) {
      return 1;
    }

    return 0;
  });

  const str = sortedCharactersArr.reduce((a, b) => {
    a += b.repeat(frequency[b]);
    return a;
  }, "");

  return str;
};
