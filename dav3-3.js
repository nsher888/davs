const arr1 = ['HELLO', 'WORLD', 'JS', 'GEOLAB'];

const captialize = arr1.map(word => word.charAt(0) + word.slice(1).toLowerCase()).join(' ');

console.log(captialize);