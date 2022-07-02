const list = [42, 32, 4];
const newList = copy(list, function(value){ return value*10; });

function copy(array, f) {
    if (f) {
        return array.map(f);
    }
    return array.slice();
}

console.log(newList);