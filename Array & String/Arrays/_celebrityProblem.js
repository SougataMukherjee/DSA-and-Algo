//You are given two jugs with capacities x and y litres. You need to determine whether it is possible to measure exactly target litres of water using these two jugs. You can fill a jug completely, empty a jug, or pour water from one jug to the other until either the first jug is empty or the second jug is full.
//Write a function to return true if the target can be measured and false otherwise.
function celebrity(mat) {
  let n = mat.length; // Get the number of people in the party.
  let a = 0; // Initialize a pointer at the beginning of the party.
  let b = n - 1; // Initialize a pointer at the end of the party.

  while (a < b) {
    // Loop until the two pointers meet.
    if (mat[a][b] == 1) {
      // If a knows b, a cannot be the celebrity.
      a += 1; // Move to the next person.
    } else {
      b -= 1; // If a doesn't know b, b cannot be the celebrity.
    }
  }

  for (let i = 0; i < n; i++) {
    // Check if the potential celebrity knows anyone else.
    if (i !== a && (mat[a][i] == 1 || mat[i][a] == 0)) {
      return -1; // If the potential celebrity knows someone or is not known
      // by everyone, return -1.
    }
  }

  return a;
}
