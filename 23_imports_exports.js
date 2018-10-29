import { SEARCH_URL, SEARCH_QUERY, OTHER_CONSTANT as OTHER } from "./consts";

(async () => {
  try {
    const API_URL = `${SEARCH_URL}${SEARCH_QUERY}`;

    const res = await fetch(API_URL);
    const data = await res.json();

    console.log(OTHER);
    console.log(data);
  } catch (error) {
    console.error(error.message);
  }
})();
