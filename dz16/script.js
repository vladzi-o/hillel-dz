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
  document.write(`<table class="table">`);
  document.write(` <tr>
    <th>Name</th>
    <th>Icon</th>
  </tr>`);
  this.map((hero) => {
    document.write(
      `<tr>
        <th>${hero.name === "SpiderMan" ? "Spider Man" : hero.name}</th>
       <th>
          <img style='width: 40px' src=images/${tableName}/${hero.name}.svg>
        </th>
      </tr>`
    );
  });
  document.write(`</table>`);
};

marvelHeroes.heroesRender("marvel");
dcHeroes.heroesRender("dc");
