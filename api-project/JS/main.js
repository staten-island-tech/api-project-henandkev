const url = "https://rickandmortyapi.com/api/character";

const DOMSelectors = {
  cards: document.querySelector(".cards"),
  search: document.getElementById("search"),
};

async function getData(url) {
  try {
    const response = await fetch(url);
    const Data = await response.json();
    return Data.results;
  } catch (error) {
    console.log(error);
  }
}

function defaultCardGenerate(filtercharacters) {
  filtercharacters.forEach((characters) => {
    DOMSelectors.cards.insertAdjacentHTML(
      "beforeend",
      `<div class="card" id="${characters.name
        .toLowerCase()
        .replace(/ /g, "")}">
        <h2 class="characterName">${characters.name}</h2>
        <img class="img" src="${characters.image}"/>
        <div class="text">
        <h3>${characters.status}</h3>
        <h3>${characters.origin.name}</h3>
        </div>
    </div>`
    );
  });
}

async function main() {
  var filtercharacters = await getData(url);
  defaultCardGenerate(filtercharacters);
}
main();