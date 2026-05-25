const suspects = [
{
  name: "Bianca Frost",
  image: "./assets/suspects/bianca_frost.jpg",
  traits: [
    "Black woman",
    "Long dark wavy hair",
    "No glasses",
    "Fashionable",
    "Athletic",
    "Wealthy",
    "Influencer",
    "Extrovert"
  ]
}
];

const rooms = [
{
  name: "Art Vault",
  image: "assets/rooms/art_vault.jpg",
  traits: [
    "No windows",
    "Vault door",
    "Artwork",
    "Concrete walls",
    "Cold lighting",
    "Minimal furniture",
    "Secure",
    "Medium room"
  ]
}
];

const weapons = [
{
  name: "Champagne Saber",
  image: "assets/weapons/champagne_saber.jpg",
  traits: [
    "Sharp",
    "Silver blade",
    "Black handle",
    "Luxury item",
    "Handled",
    "Medium size",
    "Metal",
    "Ceremonial"
  ]
}
];

const suspectContainer = document.getElementById("suspects");
const roomContainer = document.getElementById("rooms");
const weaponContainer = document.getElementById("weapons");

const accuseBtn = document.getElementById("accuseBtn");

let selected = {
  suspect: null,
  room: null,
  weapon: null
};

function createCard(item, type){

  const card = document.createElement("div");
  card.className = "card";

  const traitsHTML = item.traits.map(trait => {
    return `<div class="trait">${trait}</div>`;
  }).join("");

  card.innerHTML = `
    <img class="cardImage" src="${item.image}">
    
    <div class="cardContent">
      <div class="cardTitle">${item.name}</div>

      <div class="traits">
        ${traitsHTML}
      </div>
    </div>
  `;

  card.addEventListener("click", () => {

    document.querySelectorAll(`.${type}Card`)
      .forEach(c => c.classList.remove("selected"));

    card.classList.add("selected");

    selected[type] = item;

    checkReady();

  });

  card.classList.add(`${type}Card`);

  return card;
}

function render(){

  suspects.forEach(s => {
    suspectContainer.appendChild(
      createCard(s, "suspect")
    );
  });

  rooms.forEach(r => {
    roomContainer.appendChild(
      createCard(r, "room")
    );
  });

  weapons.forEach(w => {
    weaponContainer.appendChild(
      createCard(w, "weapon")
    );
  });

}

function checkReady(){

  if(
    selected.suspect &&
    selected.room &&
    selected.weapon
  ){
    accuseBtn.disabled = false;
  }

}

accuseBtn.addEventListener("click", () => {

  document.getElementById("notes").innerHTML = `
    <strong>Selected:</strong><br><br>

    Suspect:
    ${selected.suspect.name}<br><br>

    Room:
    ${selected.room.name}<br><br>

    Weapon:
    ${selected.weapon.name}
  `;

});

render();
