function sumOfMatrix(N, M, Grid) {
  let sum = 0; //Initialize variable to store the sum of matrix elements
  for (let row of Grid) {
    //Iterate over each row in the matrix
    for (let el of row) {
      //Iterate over each element in the row
      sum += el; //Add the element to the sum
    }
  }
  return sum;
}
