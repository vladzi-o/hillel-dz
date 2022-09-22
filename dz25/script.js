const API_URL = "https://63104dd6826b98071a3d9b42.mockapi.io";
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

function fetchHeroes() {
  fetch(`${API_URL}/heroes`, { headers: HEADERS })
    .then((response) => response.json())
    .then((data) => {
      data.forEach(renderHero);
    });
}

function addHero(hero) {
  return fetch(`${API_URL}/heroes`, {
    method: "POST",
    body: JSON.stringify(hero),
    headers: HEADERS,
  });
}

async function deleteHero(hero, row) {
  await fetch(`${API_URL}/heroes/${hero.id}`, {
    method: "DELETE",
    headers: HEADERS,
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
