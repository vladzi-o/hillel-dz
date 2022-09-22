const API_URL = "https://632a220b1090510116bbe8cd.mockapi.io";
const HEADERS = {
  "content-type": "application/json",
};

const form = document.querySelector("form");
const nameInput = document.querySelector("#name");
const universeSelect = document.querySelector("#universe");
const isFavoriteCheckbox = document.querySelector("#isFavorite");
const table = document.querySelector("#table");

function getFormData() {
  return {
    name: nameInput.value.trim(),
    comics: universeSelect.value,
    favourite: isFavoriteCheckbox.checked,
  };
}

function renderHero(hero) {
  const { name, comics, favourite } = hero;
  const markup = `       
    <td>${name}</td>
    <td>${comics}</td>
    <td>
      <label class="heroFavouriteInput">
        Favourite: <input ${favourite ? "checked" : ""} type="checkbox" />
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

function renderUniverse(name) {
  const newOption = document.createElement("option");
  newOption.value = name;
  newOption.innerHTML = name;
  universeSelect.appendChild(newOption);
}

async function fetchResourse(resourse, options = {}) {
  const response = await fetch(`${API_URL}/${resourse}`, {
    headers: HEADERS,
    ...options,
  });
  const data = await response.json();
  return data;
}

async function fetchHeroes() {
  const heroes = await fetchResourse("heroes");
  heroes.forEach(renderHero);
}

async function fetchUniverses() {
  const universes = await fetchResourse("universes");
  universes.forEach((universe) => renderUniverse(universe.name));
}

async function addHero(hero) {
  const newHero = await fetchResourse("heroes", {
    method: "POST",
    body: JSON.stringify(hero),
  });
  return newHero;
}

async function deleteHero(hero, row) {
  await fetchResourse(`heroes/${hero.id}`, { method: "DELETE" });
  row.remove();
}

form.addEventListener("submit", async (event) => {
  event.preventDefault();
  const heroFormData = getFormData();
  const hero = await addHero(heroFormData);
  renderHero(hero);
});

fetchUniverses();
fetchHeroes();
