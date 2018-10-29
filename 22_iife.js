// FETCH!
// Immediately invoked function expression

(async () => {
  try {
    const SEARCH_QUERY = "Javascript";
    const SEARCH_URL = "https://openlibrary.org/search.json?q=";
    const API_URL = `${SEARCH_URL}${SEARCH_QUERY}`;

    const res = await fetch(API_URL);
    const data = await res.json();
  } catch (error) {
    console.log(error);
  }
})();


