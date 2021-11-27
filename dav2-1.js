const numbers = [14, 2, 45, 13, 54, 66, 21, 40];

let maxNum = numbers[0];
let minNum = numbers[0];

for (i = 0; i < numbers.length; i++) {
    if (numbers[i] >= maxNum) {
        maxNum = numbers[i];
    }
    if (numbers[i] < minNum) {
        minNum = numbers[i];
    }
}

console.log("max num is " + maxNum);
console.log("min num is " + minNum);
