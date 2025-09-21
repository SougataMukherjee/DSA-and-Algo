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
