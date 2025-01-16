let n = 12321,
  r,
  sum = 0,
  rev = 0;
let size = n.length;
let temp = n;
while (n > 0) {
  r = n % 10;
  rev = rev * 10 + r;
  n = Math.floor(n / 10);
}
if (temp === rev) {
  console.log("palindrome");
} else {
  console.log("not");
}

//for string
let str = "madam";
function isPalindrome(s) {
  let len = s.length;
  let mid = Math.floor(len / 2);
  for (let i = 0; i < mid; i++) {
    if (s[i] !== s[len - i - 1]) {
      return false;
    }
  }
  return true;
}
if (isPalindrome(str)) {
  console.log("palindrome");
} else {
  console.log("not palindrome");
}
let str2 = "Geeks";
function longestPalindromeSubstring(s) {
  let longest = "";

  for (let i = 0; i < s.length; i++) {
    for (let j = i; j < s.length; j++) {
      let substr = s.slice(i, j + 1);
      if (isPalindrome(substr) && substr.length > longest.length) {
        longest = substr;
      }
    }
  }

  return longest;
}
console.log("Longest Palindromic Substring:", longestPalindromeSubstring(str2)); //ee

//using recursion technique
function IsPalindrome(str, l, r) {
  if (l >= r) return true;
  if (str[l] !== str[r]) return false;
  return IsPalindrome(str, l + 1, r - 1);
}
const str1 = "madam";
console.log(IsPalindrome(str1, 0, str1.length - 1));
