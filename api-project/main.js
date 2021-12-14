import "./style.css";

const URL = " https://api.chess.com/pub/titled/IM";
async function getData(URL) {
  try {
    const response = await fetch(URL);
    const data = await response.json();
    document.getElementById("username").textContent = data.image;
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}
getData(URL);
