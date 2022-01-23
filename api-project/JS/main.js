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
      `<div class="card" id="${characters.name.toLowerCase()}">
        <h2 class="characterName">${characters.name}</h2>
        <img src="${characters.image}"/>
        <div class="text">
        <h3>${characters.status}</h3>
        <h3>${characters.origin.name}</h3>
        </div>
    </div>`
    );
  });
}

function search() {
  const character = document.getElementById("input").value.toLowerCase();
  const charCards = document.getElementsByClassName("card");
  for (i = charCards.length - 1; i >= 0; i--) {
    if (!charCards[i].id.includes(character)) {
      charCards[i].style.display = "none";
    } else {
      charCards[i].style.display = "";
    }
  }
}

async function main() {
  var filtercharacters = await getData(url);
  defaultCardGenerate(filtercharacters);
}
main();
