sports = [
	['skier','⛷'],
	['snowboarder','🏂'],
	['apple','🍎'],
	['hockey','🏒'],
	['ice skate','⛸'],
	['swimmer','🏊'],
	['surfer','🏄‍'],
	['watermelon','🍉'],
	['lemon','🍋'],
	['rowboat','🚣'],
	['bicyclist','🚴‍']
];

winterSports = sports.slice(0,2).concat(sports.slice(3,5));
summerSport = sports.slice(5,7).concat(sports.slice(-2));
fruits = sports.slice(2,3).concat(sports.slice(7,9));
output = '<h3>*** Winter Sports ***</h3><ul>';

for (i = 0; i < winterSports.length; i++) {
	output += `<li>${winterSports[i][0]}: ${winterSports[i][1]}</li>`;
}
output += '</ul><br><h3>*** Summer Sports ***</h3><ul>'
for (i = 0; i < summerSport.length; i++) {
	output += `<li>${summerSport[i][0]}: ${summerSport[i][1]}</li>`;
}
output += '</ul><br><h3>*** Fruits ***</h3><ul>'
for (i = 0; i < fruits.length; i++) {
	output += `<li>${fruits[i][0]}: ${fruits[i][1]}</li>`;
}
output += '</ul>'

document.write (
	output 
)