import { Data } from "./array.js";

const DOMSelectors = {
  cards: document.querySelector(".cards"),
};

function defaultCardGenerate(el) {
  el.data.forEach((sport) => {
    if (sport.attributes.parent_id === null) {
      if (sport.attributes.description != null) {
        DOMSelectors.cards.insertAdjacentHTML(
          "beforeend",
          `<div class="card" id="${sport.id}">
    <h2 class="sportName">${sport.attributes.name}</h2>
    <img
      src="${sport.attributes.icon}"
    />
    <div class="text">
      <h3>
        ${sport.attributes.description}
      </h3>`
        );
      }
    }
  });
  DOMSelectors.inputField.value = "";
}

Data.then((what) => {
  defaultCardGenerate(what);
});
