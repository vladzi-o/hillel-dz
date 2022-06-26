hero = ['Ivan'];
native = ['York','Of'];
destination = ['Poltava','In'];

native.reverse();
destination.reverse();
destination[1] = 'Vain';
hero[0] = 'Richard';
native.push('Gove');
destination.unshift('Battle')

rainbow = hero.concat(native, destination);
colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
output = []
for (i = 0; i < rainbow.length; i++) {
    output.push(`<div class="text"><div class="circle" style="background-color: ${colors[i]}"></div>${rainbow[i]}</div>`);
}

document.write (
    `<div class="box">${output.join("")}</div>`
)