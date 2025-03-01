function isIsomorphic(s, t) {
  if (s.length !== t.length) return false;

  let mp = new Map();
  let set = new Set();

  for (let i = 0; i < s.length; i++) {
    let sch = s[i];
    let tch = t[i];

    if (mp.has(sch)) {
      if (mp.get(sch) !== tch) return false;
    } else {
      if (set.has(tch)) return false;
      mp.set(sch, tch);
      set.add(tch);
    }
  }
  return true;
}

console.log(isIsomorphic("egg", "add")); // true
console.log(isIsomorphic("foo", "bar")); // false
console.log(isIsomorphic("paper", "title")); // true
