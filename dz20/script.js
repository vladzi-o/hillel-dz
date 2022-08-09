// В документе имеем иерархию ul.root>li*3>ul*2>li*5 (emmet pattern)

// Написать скрипт, который добавит класс `last` всем последним li в группах.
// Написать функцию setFirstItemClassName(level), где level - это номер уровня вложенности,
//  в котором нужно произвести изменения.
//  Функция setFirstItemClassName должна установить первому тегу группы - класс `first-item`
// * при добавлении классов - должен измениться цвет фона на красный(first) и зеленый(last),
//  с анимацией - задержка 2 секунды (tran)

document
  .querySelectorAll("ul > li:last-child")
  .forEach((li) => li.classList.add("last"));

function setFirstItemClassName(level) {
  let query = "ul.root>li";
  while (level !== 1) {
    query += "> ul > li";
    level--;
  }

  query += ":first-child";
  console.log(query);
  console.log(document.querySelectorAll(query));
  document
    .querySelectorAll(query)
    .forEach((li) => li.classList.add("first-item"));
}

setFirstItemClassName(2);
