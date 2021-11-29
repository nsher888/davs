function complex(...args) {
    try {
        const checkNum = args.filter((item) => typeof item === "number");
        const checkTimes = checkNum.map((item) => item % 2 === 0 ? item / 2 : item ** 2);
        const sum = checkTimes.reduce((a, b) => a + b);
        return Math.floor(sum / 2);
    } catch {
        const error = "No numbers in array";
        return error;
    }
}

console.log(complex("Moon", 2, 3, null, true, 4, 5, 23.3));
console.log(complex('name', false));