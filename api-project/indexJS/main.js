import { arrayData } from "./array.js";
import { DOMSelectors } from "./dom";

function defaultCardGenerate(el) {
  el.data.forEach((character) => {
    if (character.data.name === null) {
      if (character.data.icon != null) {
        if (character.data.description != null) {
          DOMSelectors.cards.insertAdjacentHTML(
            "beforeend",
            `<div class="card" id="${film.id}">
    <h2 class="movieName">${film.data.name}</h2>
    <img
      src="${film.data.imageURL}"
    />
    <div class="text">`
          );
        }
      }
    }
  });
  DOMSelectors.inputField.value = "";
}

arrayData.then((val) => {
  defaultCardGenerate(val);
});
function cardGenerate(el) {
  el.data.forEach((character) => {
    if (character.data.name == null) return;
    const check = character.data.name.toLowerCase();
    if (check == DOMSelectors.inputField.value.toLowerCase()) {
      if (character.data.imageURL === null) {
        DOMSelectors.cards.insertAdjacentHTML(
          "beforeend",
          `<div class="card" id="${film.id}">
      <h2 class="movieName">${film.data.name}</h2>
      <img
        
      />
      <div class="text">`
        );
      } else {
        DOMSelectors.cards.insertAdjacentHTML(
          "beforeend",
          `<div class="card" id="${film.id}">
      <h2 class="movieName">${film.disney.name}</h2>
      <img
        
      />`
        );
      }
    } else {
      if (character.attributes.description === null) {
        if (character.data.imageURL === null) {
          DOMSelectors.cards.insertAdjacentHTML(
            "beforeend",
            `<div class="card" id="${film.id}">
      <h2 class="movieName">${film.data.name}</h2>
      <img
        
      />`
          );
        } else {
          DOMSelectors.cards.insertAdjacentHTML(
            "beforeend",
            `<div class="card" id="${film.id}">
      <h2 class="movieName">${film.data.name}</h2>
      <img
        src="${film.data.imageURL}"
      />
      <div class="text">`
          );
        }
      } else {
        DOMSelectors.cards.insertAdjacentHTML(
          "beforeend",
          `<div class="card" id="${film.id}">
    <h2 class="movieName">${film.data.name}</h2>
    <img
      src="${film.data.imageURL}"
    />
    <div class="text">`
        );
      }
    }
  });
  console.log("test");
  DOMSelectors.inputField.value = "";
}
