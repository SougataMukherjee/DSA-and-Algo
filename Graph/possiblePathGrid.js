function findPath(sRow, sCol, eRow, eCol, s, result) {
  if (sRow > eRow || sCol > eCol) return; // Out of bounds
  if (sRow === eRow && sCol === eCol) {
    // Reached the destination
    result.push(s);
    return;
  }
  // Move Down
  findPath(sRow + 1, sCol, eRow, eCol, s + "D", result);
  // Move Right
  findPath(sRow, sCol + 1, eRow, eCol, s + "R", result);
}
const res = [];
findPath(1, 1, 3, 3, "", res);
console.log(res, res.length); //[ 'DDRR', 'DRDR', 'DRRD', 'RDDR', 'RDRD', 'RRDD' ] 6
