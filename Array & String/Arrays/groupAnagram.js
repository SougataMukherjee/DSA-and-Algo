function anagrams(arr) {
  let map = {};

  for (let word of arr) {
    let sortedWord = word.split("").sort().join(""); // Sort characters
    if (!map[sortedWord]) {
      map[sortedWord] = []; // Initialize if not exists
    }
    map[sortedWord].push(word); // Add word to corresponding group
  }

  return Object.values(map);
}
