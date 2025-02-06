let str = "aaabbbccc",
  equalPart = 3;
if (str.length % equalPart === 0) {
  let part = str.length / equalPart;
  for (let i = 0; i < str.length; i++) {
    if (i % part === 0) {
      console.log(str.charAt(i));
    }
  }
}
