//Given an array of bird observations, find the bird type that appears most frequently. If multiple bird types have the same frequency, return the smallest bird type ID.
//I.P [1, 4, 4, 4, 5, 3]  O.P 4

function migratoryBirdsObservation(arr) {
  let typeCount = [0, 0, 0, 0, 0]; // Array to store counts for types 1 to 5
  let maxCount = 0;
  let resultType = 1;

  // Count occurrences
  for (let i = 0; i < arr.length; i++) {
    let type = arr[i] - 1;
    typeCount[type]++;

    // Update maxCount and resultType
    if (
      typeCount[type] > maxCount ||
      (typeCount[type] === maxCount && type + 1 < resultType)
    ) {
      maxCount = typeCount[type];
      resultType = type + 1;
    }
  }

  return resultType;
}
