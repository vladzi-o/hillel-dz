console.log(assignObjects({ x: 10 }, { x: 20, y: 30 }));

function assignObjects(obj1, obj2) {
  return Object.assign({}, obj1, obj2);
}

function assignObjects2(obj1, obj2) {
  return { ...obj1, ...obj2 };
}

// Написать функцию assignObjects(obj1, obj2), которая принимает аргументами 2 объекта и возвращает
//  новый, который состоит из свойств обоих объектов (склеить).
// Если свойство повторяется, то взять значение второго объекта

// assignObjects({ x: 10, y: 20 }, { z: 30 }) вывод { x:10, y:20, z: 30 }
// assignObjects({ x: 10 }, { x: 20, y: 30 }) вывод { x:20, y: 30 }
