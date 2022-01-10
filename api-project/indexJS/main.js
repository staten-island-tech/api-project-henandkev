import { arrayData } from "./array.js";
import { DOMSelectors } from "./dom";

const questionMark = "/questionMark.png";
function defaultCardGenerate(el) {
  el.data.forEach((element) => {
    if (element.data._id === null) {
      if (element.data.icon != null) {
        if (element.data.description != null) {
          DOMSelectors.cards.insertAdjacentHTML(
            "beforeend",
            `<div class="card" id="${element.id}">
    <h2 class="movieName">${element.data.name}</h2>
    <img
      src="${element.data.imageURL}"
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
  el.data.forEach((element) => {
    if (element.data.name == null) return;
    const check = element.data.name.toLowerCase();
    if (check == DOMSelectors.inputField.value.toLowerCase()) {
      if (element.data.imageURL === null) {
        DOMSelectors.cards.insertAdjacentHTML(
          "beforeend",
          `<div class="card" id="${element.id}">
      <h2 class="movieName">${element.data.name}</h2>
      <img
        src="${questionMark}"
      />
      <div class="text">`
        );
      } else {
        DOMSelectors.cards.insertAdjacentHTML(
          "beforeend",
          `<div class="card" id="${element.id}">
      <h2 class="movieName">${element.data.name}</h2>
      <img
        src="${questionMark}"
      />`
        );
      }
    } else {
      if (element.attributes.description === null) {
        if (element.data.imageURL === null) {
          DOMSelectors.cards.insertAdjacentHTML(
            "beforeend",
            `<div class="card" id="${element.id}">
      <h2 class="movieName">${element.data.name}</h2>
      <img
        src="${questionMark}"
      />`
          );
        } else {
          DOMSelectors.cards.insertAdjacentHTML(
            "beforeend",
            `<div class="card" id="${element.id}">
      <h2 class="movieName">${element.data.name}</h2>
      <img
        src="${element.data.imageURL}"
      />
      <div class="text">`
          );
        }
      } else {
        DOMSelectors.cards.insertAdjacentHTML(
          "beforeend",
          `<div class="card" id="${element.id}">
    <h2 class="sportName">${element.data.name}</h2>
    <img
      src="${element.data.imageURL}"
    />
    <div class="text">`
        );
      }
    }
  });
  console.log("test");
  DOMSelectors.inputField.value = "";
}
