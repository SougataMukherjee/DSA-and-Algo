function mul(x) {
  return function (y) {
    return x * y;
  };
}
mul(2)(3);
