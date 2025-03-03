for (let startI = 0; startI < n; startI++) {
  let subArray = "";
  for (let endI = startI; endI < n; endI++) {
    subArray += arr[endI] + " ";
    console.log(subArray.trim());
  }
}
