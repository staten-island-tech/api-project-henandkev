import "./style.css";

const URL = "https://api.chess.com/pub/player/hikaru";
async function fetchData(URL) {
  try {
    const response = await fetch(URL);
    const data = await response.json();
    document.getElementById("name").textContent = data.image;
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}
fetchData(URL);

const nameDOM = document.getElementById("name");
const putQuoteInHTML = async () => {
  const quote = await fetchData(URL);
  nameDOM.innerHTML = `Quote: ${quote.name}`;
};
putQuoteInHTML();
