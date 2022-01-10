const questionMark = "/questionMark.png";
function defaultCardGenerate(el) {
  el.data.forEach((element) => {
    if (element.attributes.parent_id === null) {
      if (element.attributes.icon != null) {
        if (element.attributes.description != null) {
          DOMSelectors.cards.insertAdjacentHTML(
            "beforeend",
            `<div class="card" id="${element.id}">
    <h2 class="sportName">${element.attributes.name}</h2>
    <img
      src="${element.attributes.icon}"
    />
    <div class="text">
      <h3 class="description">
        ${element.attributes.description}
      </h3>`
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
    if (element.attributes.name == null) return;
    const check = element.attributes.name.toLowerCase();
    if (check == DOMSelectors.inputField.value.toLowerCase()) {
      if (element.attributes.icon === null) {
        if (element.attributes.description === null) {
          DOMSelectors.cards.insertAdjacentHTML(
            "beforeend",
            `<div class="card" id="${element.id}">
      <h2 class="sportName">${element.attributes.name}</h2>
      <img
        src="${questionMark}"
      />
      <div class="text">
        <h3 class="description">
        No description is available for this sport!
        </h3>`
          );
        } else {
          DOMSelectors.cards.insertAdjacentHTML(
            "beforeend",
            `<div class="card" id="${element.id}">
      <h2 class="sportName">${element.attributes.name}</h2>
      <img
        src="${questionMark}"
      />
      <div class="text">
        <h3 class="description">
          ${element.attributes.description}
        </h3>`
          );
        }
      } else {
        if (element.attributes.description === null) {
          if (element.attributes.icon === null) {
            DOMSelectors.cards.insertAdjacentHTML(
              "beforeend",
              `<div class="card" id="${element.id}">
      <h2 class="sportName">${element.attributes.name}</h2>
      <img
        src="${questionMark}"
      />
      <div class="text">
        <h3 class="description">
          ${element.attributes.description}
        </h3>`
            );
          } else {
            DOMSelectors.cards.insertAdjacentHTML(
              "beforeend",
              `<div class="card" id="${element.id}">
      <h2 class="sportName">${element.attributes.name}</h2>
      <img
        src="${element.attributes.icon}"
      />
      <div class="text">
        <h3 class="description">
          No description is available for this sport!
        </h3>`
            );
          }
        } else {
          DOMSelectors.cards.insertAdjacentHTML(
            "beforeend",
            `<div class="card" id="${element.id}">
    <h2 class="sportName">${element.attributes.name}</h2>
    <img
      src="${element.attributes.icon}"
    />
    <div class="text">
      <h3 class="description">
        ${element.attributes.description}
      </h3>`
          );
        }
      }
    }
  });
  console.log("test");
  DOMSelectors.inputField.value = "";
}
("https://sports.api.decathlon.com/sports");
