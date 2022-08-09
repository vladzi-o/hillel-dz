// на странице находятся элементы:

// div - фигура, которая может принимать какие-то формы

// select - выбрать тип фигуры (квадрат, прямоугольник, круг). При изменении значения в нем, меняется фигура

// input для выбора цвета. При его изменении меняется цвет фигуры

const div = document.querySelector("div");
const input = document.querySelector("input");
const select = document.querySelector("select");

select.addEventListener("change", (event) => {
  const figure = event.target.value;
  div.className = figure;
});

input.addEventListener("input", (event) => {
  console.log(event);
  const color = event.target.value;
  console.log(color);
  div.style.backgroundColor = color;
});
