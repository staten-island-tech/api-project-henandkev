import { Data } from "./array.js";

const DOMSelectors = {
  cards: document.querySelector(".cards"),
  searchbutton: document.querySelector(".myOverlay"),
};

function defaultCardGenerate(el) {
  el.results.forEach((characters) => {
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
  DOMSelectors.inputField.value = "";
}

Data.then((what) => {
  defaultCardGenerate(what);
});

// Open the full screen search box
function openSearch() {
  document.getElementById("myOverlay").style.display = "block";
}

// Close the full screen search box
function closeSearch() {
  document.getElementById("myOverlay").style.display = "none";
}
