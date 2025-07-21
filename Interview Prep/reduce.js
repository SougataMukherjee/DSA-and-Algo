const movies = [
  { name: "Don", budget: 200 },
  { name: "Krish", budget: 100 },
  { name: "Spiderman", budget: 300 },
];

const totalBudget = movies.reduce((sum, movie) => sum + movie.budget, 0);
console.log(totalBudget); // 600
const maxBudget = movies.reduce(
  (max, movie) => (movie.budget > max ? movie.budget : max),
  0
);
console.log(maxBudget); // 300
const movieCounts = movies.reduce((counts, movie) => {
  counts[movie.name] = (counts[movie.name] || 0) + 1;
  return counts;
}, {});
console.log(movieCounts); //{ Don: 1, Krish: 1, Spiderman: 1 }
const moviesObject = movies.reduce((result, { name, ...rest }) => {
  result[name] = rest;
  return result;
}, {});
console.log(moviesObject); //{Don: { budget: 200 },Krish: { budget: 100 },Spiderman: { budget: 300 }}
