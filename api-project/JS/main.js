import { Data } from "./array.js";

const DOMSelectors = {
  cards: document.querySelector(".cards"),
  searchBar = document.getElementById("searchBar"),
};

let filtercharacters = (Data.results)
console.log(filtercharacters)

function defaultCardGenerate(filtercharacters) {
  filtercharacters.forEach((characters) => {
    DOMSelectors.cards.insertAdjacentHTML(
      "beforeend",
      `<div class="card" id="${characters.id}">
    <h2 class="characterName">${characters.name}</h2>
    <img src="${characters.image}"/>
    <div class="text">
    <h3>
    ${characters.status}</h3>
      <h3>
        ${characters.origin.name}
      </h3>`
    );
  });
}
defaultCardGenerate(filtercharacters)

searchBar.addEventListener('keyup', (e) => {
  const searchString = e.target.value.toLowerCase();
  filtercharacters = el.results.filter((character) => {
    return (
      character.name.toLowerCase().includes(searchString) ||
      character.status.toLowerCase().includes(searchString))})
  cards.forEach(e => e.remove());
})
