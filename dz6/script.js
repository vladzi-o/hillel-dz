do {
    period = prompt('Enter period').replaceAll(' ','').toLowerCase(); 
} while (period !== 'winter' && period !== 'summer');
do {
    category = prompt('Enter category').replaceAll(' ','').toLowerCase();
} while (category !== 'fruits' && category !== 'vegetables');
fruits = ['grapes','raspberry', 'coconut'];
fruitPrices = [20,25,50];
vegetables = ['cabbage', 'avocado', 'tomato'];
vegetablePrices = [8,30,10];
availableProducts = (category === 'fruits' ? fruits : vegetables);
availablePrices = (category === 'fruits' ? fruitPrices : vegetablePrices);
do {
    product = prompt('Enter product').replaceAll(' ','').toLowerCase()
} while (!availableProducts.includes(product));
do {
    number = +prompt('Enter quantity');
} while (number <= 1 || isNaN(number));
prductIndex = availableProducts.indexOf(product)
price = availablePrices[prductIndex];
sum = price * number;
if (period === 'summer'){
    sum *= 0.8;
} else {
    sum *= 2;
}
document.write(`
    <div class="product" align="center">
        <img src="images/${category}/${product}.svg" alt="${product}" width="100" height="100">
        <p>Selected product: <b>${product}</b></p>
        <p>Count of ${product}s: <b>${number}</b></p>
        <p>Selected period: <b>${period}</b></p>
        <p>Selected category: <b>${category}</b></p>
        <p>Final sum: <b>${sum} UAH</b></p>
    </div>`)