let marvelHeroes = [
  {
    name: "Thor",
  },
  {
    name: "SpiderMan",
  },
];

let dcHeroes = [
  {
    name: "Superman",
  },
  {
    name: "Batman",
  },
  {
    name: "Deadpool",
  },
];

Array.prototype.heroesRender = function (tableName) {
  document.write(`<table class="table">
   <tr>
    <th>Name</th>
    <th>Icon</th>
  </tr>
  ${this.map(
    (hero) =>
      `<tr>
        <th>${hero.name === "SpiderMan" ? "Spider Man" : hero.name}</th>
       <th>
          <img style='width: 40px' src=images/${tableName}/${hero.name}.svg>
        </th>
      </tr>`
  ).join("")}
  </table>`);
};

marvelHeroes.heroesRender("marvel");
dcHeroes.heroesRender("dc");
