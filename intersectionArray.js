function intersection(num1, num2) {
  return num1.filter(function (n) {
    return num2.indexOf(n) !== -1;
  });
}
