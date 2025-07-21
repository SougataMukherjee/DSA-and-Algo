const getPokemon = async (id) => {
  const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
  isLoading = true;
  const res = await fetch(url);
  const data = await res.json();
  isLoading = false;
  return data;
};

//autofetch fetch again when error happen until maximum count
async function autoFetch(fetcher, count) {
  let lastError;

  for (let i = 0; i < count; i++) {
    try {
      return await fetcher();
    } catch (err) {
      lastError = err;
    }
  }

  throw lastError;
}
autoFetch(fetchData, 3)
  .then((data) => console.log(data))
  .catch((err) => console.error("Failed after retries:", err));
