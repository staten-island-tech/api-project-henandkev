import { arrayData } from "./array.js";
import { DOMSelectors } from "./dom";

const apiEntry = "https://api.disneyapi.dev/characters";
async function fetchData(apiEntry) {
  try {
    const response = await fetch(apiEntry);
    const data = await response.json();
    console.log(data);
    return data;
  } catch (err) {
    console.error(err);
  }
}
fetchData(apiEntry);

const apiResponseDOM = document.getElementById("api-response");
const putQuoteInHTML = async () => {
  const quote = await fetchData(apiEntry);
  apiResponseDOM.innerHTML = `Quote: ${quote.content}`;
};
putQuoteInHTML();
