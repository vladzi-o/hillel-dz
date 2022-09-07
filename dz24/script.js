// Вверху страницы находится инпут и кнопка. Пользователь может ввести туда username любого пользователя гитхаб.
// Когда пользователь ввел логин, он может нажать на кнопку "Найти". В этот момент приложение должно отправить
// запрос на API Github и получить информацию о пользователе
// Данные для пользователя берем из запроса https://api.github.com/users/{{login}} , где логин - это логин выбраного
// пользователя.
// Н-р для пользователя vladimirkr url будет https://api.github.com/users/vladimirkr
// После получения данных нужно показать аватар пользователя (свойство avatar_url), количество репозиториев
// (свойство public_repos), количество фоловеров (свойство followers) и количество наблюдаемых (свойство following)
// Если такого юзернейма не существует гитхаб вернет ошибку (404). Попробуйте обработать ее в .catch

const searchButton = document.querySelector("#search");
const image = document.querySelector("#image");
const userData = document.querySelector("#userData");
const input = document.querySelector("#input");

searchButton.addEventListener("click", () => {
  const login = input.value;
  fetch(`https://api.github.com/users/${login}`)
    .then((response) => {
      if (response.status !== 200) {
        throw new Error(`User ${login} not found`);
      }
      return response.json();
    })
    .then((data) => {
      console.log(data);
      const { avatar_url, public_repos, followers, following } = data;
      image.src = avatar_url;
      userData.innerText = `Public repos: ${public_repos}, Followers: ${followers}, Following: ${following}`;
    })
    .catch(console.error);
});
