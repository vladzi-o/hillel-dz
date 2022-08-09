// Сеть фастфудов предлагает несколько видов гамбургеров:

// маленький (5$, 20 калорий)
// большой (10$, 40 калорий)

// Гамбургер может быть с одним из нескольких видов начинок:

// сыром (+ 1$, + 20 калорий)
// салатом (+ 2$, + 5 калорий)
// картофелем (+ 1,5$ , + 10 калорий)

// Можно добавить добавки:

// посыпать приправой (+ 1,5$, 0 калорий)
// полить майонезом (+ 2$, + 5 калорий).

// Напишите программу, рассчитывающую стоимость и калорийность гамбургера.

// Подсказка: нужен класс Гамбургер, глобальный объект HAMBURGER (с перечнем всех его ингредиентов и характеристик) и методы для выбора опций и расчета нужных величин.

class Hamburger {
  constructor(price, callories, ingredients) {
    this.price = price;
    this.callories = callories;
    this.ingredients = ingredients;
  }

  getPrice() {
    let price = this.price;
    this.ingredients.forEach((ingredient) => {
      price += ingredient.price;
    });
    return price;
  }

  getCallories() {
    let callories = this.callories;
    this.ingredients.forEach((ingredient) => {
      callories += ingredient.callories;
    });
    return callories;
  }

  addIngredient(ingredient) {
    this.ingredients.push(ingredient);
  }
}

class Ingredient {
  constructor(price, callories) {
    this.price = price;
    this.callories = callories;
  }
}

const cheese = new Ingredient(1, 20);
const salade = new Ingredient(2, 5);
const potato = new Ingredient(1.5, 10);
const spice = new Ingredient(1.5, 0);
const mayo = new Ingredient(2, 5);

const smallBurger = new Hamburger(5, 20, [cheese, salade, potato]);
const bigBurger = new Hamburger(10, 40, [cheese, salade, potato]);

console.log("small Burger", {
  price: smallBurger.getPrice(),
  callories: smallBurger.getCallories(),
});

console.log("big Burger", {
  price: bigBurger.getPrice(),
  callories: bigBurger.getCallories(),
});

bigBurger.addIngredient(spice);

console.log("big Burger with spice", {
  price: bigBurger.getPrice(),
  callories: bigBurger.getCallories(),
});

smallBurger.addIngredient(mayo);

console.log("small Burger with mayo", {
  price: smallBurger.getPrice(),
  callories: smallBurger.getCallories(),
});

console.log(smallBurger);
