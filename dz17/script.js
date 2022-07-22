function Product(category, type, price) {
  this.category = category;
  this.type = type;
  this.price = price;
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

const kitchenProducts = [
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

const devicesProducts = [
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

const cosmeticsProducts = [
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
      (item) => new Product("devices", item.type, item.price)
    ),
    ...cosmeticsProducts.map(
      (item) => new Product("cosmetics", item.type, item.price)
    ),
  ]
    .map((instance) => instance.render())
    .join("")}
</table>
`);
