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

//solution 2
function palindromicPartition(s) {
  let n = s.length;

  // Create two arrays to build the solution in bottom up manner
  // C[i] = Minimum number of cuts needed for palindrome partitioning
  // of substring S[0..i]
  // P[i][j] = true if substring S[i..j] is palindrome, else false
  // Note that C[i] is 0 if P[0][i] is true
  let C = new Array(n);
  let P = new Array(n);

  for (let i = 0; i < n; i++) {
    P[i] = new Array(n);
  }

  for (let i = 0; i < n; i++) {
    P[i][i] = true;
  }

  for (let L = 2; L <= n; L++) {
    for (let i = 0; i < n - L + 1; i++) {
      let j = i + L - 1; // set ending index

      // If L is 2, then we just need to compare two characters. Else
      // need to check two corner characters and value of P[i+1][j-1]
      if (L === 2) {
        P[i][j] = s[i] === s[j];
      } else {
        P[i][j] = s[i] === s[j] && P[i + 1][j - 1];
      }
    }
  }

  for (let i = 0; i < n; i++) {
    if (P[0][i]) {
      C[i] = 0;
    } else {
      C[i] = Infinity;
      for (let j = 0; j < i; j++) {
        if (P[j + 1][i] && C[j] + 1 < C[i]) {
          C[i] = C[j] + 1;
        }
      }
    }
  }

  return C[n - 1];
}
