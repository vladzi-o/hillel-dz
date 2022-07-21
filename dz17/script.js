function Product(category, type, price) {
  this.category = category;
  this.type = type;
  this.price = price;
  console.log(this);
}

Product.prototype.render = function () {
  return `
  <tr>
    <td>
      <img src="images/${this.category}/${this.type}.svg" alt="${this.type}" width="50" height="50">
    </td>
    <td>${this.type}</td>
    <td>${this.price} USD</td>
  </tr>
  `;
};

let kitchenProducts = [
  {
    type: "grater",
    price: 10,
  },
  {
    type: "pastry-bag",
    price: 25,
  },
  {
    type: "scale",
    price: 5,
  },
  {
    type: "whisk",
    price: 15,
  },
];

let devicesProducts = [
  {
    type: "desktop",
    price: [100, 1000],
  },
  {
    type: "laptop",
    price: [50, 1500],
  },
  {
    type: "smartphone",
    price: [80, 2000],
  },
  {
    type: "tablet",
    price: [20, 1300],
  },
];

let cosmeticsProducts = [
  {
    type: "blush",
    price: 100,
  },
  {
    type: "eyeshadow",
    price: 50,
  },
  {
    type: "lipstick",
    price: 80,
  },
  {
    type: "nail-polish",
    price: 200,
  },
  {
    type: "perfume",
    price: 300,
  },
];

document.write(`
<table class="">
  <tr>
    <th>Image</th>
    <th>Name</th>
    <th>Price</th>
  </tr>
  ${[
    ...kitchenProducts.map(
      (item) => new Product("kitchen", item.type, item.price)
    ),
    ...devicesProducts.map(
      ({ type, price }) => new Product("devices", type, price)
    ),
    ...cosmeticsProducts.map(
      ({ type, price }) => new Product("cosmetics", type, price)
    ),
  ]
    .map((product) => product.render())
    .join("")}
</table>
`);
