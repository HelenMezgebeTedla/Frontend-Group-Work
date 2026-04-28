function drawStars(n) {
  let stars = "";
  for (let i = 0; i < n; i++) {
    stars += "*";
  }
  return stars;
}
console.log(drawStars(5));