function makeFrequencyMap(str) {
  let mp = new Map();
  for (let i = 0; i < str.length; i++) {
    let ch = str.charAt(i);
    if (!mp.has(ch)) {
      mp.set(ch, 1);
    } else {
      mp.set(ch, mp.get(ch) + 1);
    }
  }
  return mp;
}

function isAnagram(s, t) {
  if (s.length !== t.length) return false;

  let mp1 = makeFrequencyMap(s);
  let mp2 = makeFrequencyMap(t);

  for (let [key, value] of mp1) {
    if (mp2.get(key) !== value) {
      return false;
    }
  }
  return true;
}

console.log(isAnagram("listen", "silent")); // true
console.log(isAnagram("hello", "oellh")); // true
console.log(isAnagram("abc", "abcd")); // false
