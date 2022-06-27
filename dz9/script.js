const types = ['clubs', 'spades', 'diamonds', 'hearts']
const personCards = ['jack', 'queen', 'king', 'ace'];

function getCardMarkup(nominal, type) {
    const isPersonCard = personCards.includes(nominal)
    const displayNominal = isPersonCard ? nominal[0].toUpperCase() : nominal; 
    const personImage = nominal === 'ace' ? type : nominal
    return `
        <div class="card ${isPersonCard ? 'card--person' : ''}">
			<div class="card__info">${displayNominal}<img src="images/${type}.svg" alt="${type}"></div>
            ${isPersonCard ? `<img class="person" src="images/${personImage}.svg" alt="${nominal}"></img>` : ''}
			<div class="card__info">${displayNominal}<img src="images/${type}.svg" alt="${type}"></div>
		</div>
        `
} 

let output = ''
for (let i = 2; i <= 10; i++) {
    for (let j = 0; j < types.length; j++) {
        output += getCardMarkup(i, types[j])
    }
}
for (let i = 0; i < personCards.length; i++) {
    for (let j = 0; j < types.length; j++) {
        output += getCardMarkup(personCards[i], types[j])
    }
}

document.write (
    `<div class="wrapper">${output}</div>`
)