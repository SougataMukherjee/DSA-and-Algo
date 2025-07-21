let isLoading = false;

async function fetchData(url) {
  if (isLoading) {
    console.log("Already loading!");
    return;
  }

  try {
    isLoading = true;
    const response = await fetch(url);
    if (!response.ok) throw new Error("Network error");
    const data = await response.json();
    console.log(data);
    return data;
  } catch (err) {
    console.error(err);
    throw err;
  } finally {
    isLoading = false; // Always reset
  }
}

fetchData("https://api.example.com/data");
