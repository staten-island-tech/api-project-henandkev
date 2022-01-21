import { Data } from "./array.js";

const DOMSelectors = {
  cards: document.querySelector(".cards"),
  search = document.getElementById("search"),
};

let filtercharacters = (Data.results)
console.log(filtercharacters)

function defaultCardGenerate(filtercharacters) {
  filtercharacters.forEach((characters) => {
    DOMSelectors.cards.insertAdjacentHTML(
      "beforeend",
    `<div class="card" id="${characters.name}">
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
defaultCardGenerate(filtercharacters)

function search(){
    const character = document.getElementById("input").value.toLowerCase();
    const charCards = document.getElementsByClassName("card");
    for(i=charCards.length-1; i>=0; i--){
      if(!charCards[i].id.includes(character)){
        charCards[i].style.display = "none";
      }else{ 
        charCards[i].style.display = "";
      }
    }
}
console.log (search)
