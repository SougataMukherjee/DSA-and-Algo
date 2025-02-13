function partition(s) {
  const result = [];

  const isPalindrome = (s, left, right) => {
    while (left < right) {
      if (s[left] !== s[right]) {
        return false;
      }
      left++;
      right--;
    }
    return true;
  };

  const backtrack = (start, path) => {
    if (start === s.length) {
      result.push([...path]);
      return;
    }

    for (let end = start + 1; end <= s.length; end++) {
      if (isPalindrome(s, start, end - 1)) {
        path.push(s.slice(start, end));
        backtrack(end, path);
        path.pop();
      }
    }
  };

  backtrack(0, []);
  return result;
}
