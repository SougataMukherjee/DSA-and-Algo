function floodFill(image, sr, sc, color) {
  const currColor = image[sr][sc];
  if (color === currColor) return image;

  function dfs(img, i, j) {
    // Check bounds and if it's a land cell
    if (
      i >= img.length ||
      i < 0 ||
      j >= img[0].length ||
      j < 0 ||
      img[i][j] !== currColor
    )
      return;
    img[i][j] = color;
    dfs(img, i - 1, j); //up
    dfs(img, i + 1, j); //down
    dfs(img, i, j + 1); //right
    dfs(img, i, j - 1); //left
    return img;
  }
  return dfs(image, sr, sc);
}
