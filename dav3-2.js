arr1 = [4, 5, 11, 2, 9, 99, 1092, 1];
arr1.sort((x, y) => x - y);

console.log(arr1);

///////////////////////////////////////

const arr2 = arr1.filter(item => item % 2 === 0);

console.log(arr2);

///////////////////////////////////////

const arr3 = arr2.reduce((x, y) => x * y);

console.log(arr3);
