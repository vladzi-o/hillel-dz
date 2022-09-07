const API_URL = "https://6317732882797be77ffd8274.mockapi.io";

const form = document.querySelector("form");
const nameInput = document.querySelector("#name");
const universeSelect = document.querySelector("#universe");
const isFavoriteCheckbox = document.querySelector("#isFavorite");
const table = document.querySelector("#table");

function getFormData() {
  return {
    name: nameInput.value.trim(),
    universe: universeSelect.value,
    isFavorite: isFavoriteCheckbox.checked,
  };
}

function renderHero({ name, universe, isFavorite }) {
  const markup = `       
    <td>${name}</td>
    <td>${universe}</td>
    <td>
      <label class="heroFavouriteInput">
        Favourite: <input ${isFavorite ? "checked" : ""} type="checkbox" />
      </label>
    </td>
    <td><button>Delete</button></td>`;
  const row = document.createElement("tr");
  row.innerHTML = markup;
  table.appendChild(row);
}

function fetchHeroes() {
  fetch(`${API_URL}/heroes`)
    .then((response) => response.json())
    .then((data) => {
      data.forEach(renderHero);
    });
}

function addHero(hero) {
  fetch(`${API_URL}/heroes`, {
    method: "POST",
  });
}

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const hero = getFormData();
  addHero(hero);
  renderHero(hero);
});

fetchHeroes();
