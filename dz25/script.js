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

function renderHero(hero) {
  const { name, universe, isFavorite } = hero;
  const markup = `       
    <td>${name}</td>
    <td>${universe}</td>
    <td>
      <label class="heroFavouriteInput">
        Favourite: <input ${isFavorite ? "checked" : ""} type="checkbox" />
      </label>
    </td>
    <td><button class="delete_button">Delete</button></td>`;
  const row = document.createElement("tr");
  row.innerHTML = markup;
  table.appendChild(row);
  const deleteButton = row.querySelector(".delete_button");
  deleteButton.addEventListener("click", () => {
    deleteHero(hero, row);
  });
}

function fetchHeroes() {
  fetch(`${API_URL}/heroes`)
    .then((response) => response.json())
    .then((data) => {
      data.forEach(renderHero);
    });
}

function addHero(hero) {
  return fetch(`${API_URL}/heroes`, {
    method: "POST",
    body: JSON.stringify(hero),
  });
}

async function deleteHero(hero, row) {
  await fetch(`${API_URL}/heroes/${hero.id}`, {
    method: "DELETE",
  });
  row.remove();
}

form.addEventListener("submit", async (event) => {
  event.preventDefault();
  const heroFormData = getFormData();
  const response = await addHero(heroFormData);
  const hero = await response.json();
  renderHero(hero);
});

fetchHeroes();
