// every მეთოდი - ამ მეთოდის საშუალებით შეგვიძლია შევამოწმოთ აკმაყოფილებს თუ არადა array-ს ელემენტები ჩვენს მიერ მიწოდებულ პირობას,
// პასუხი ბრუნდება boolean ფორმატით, თუ ყველა ელემენტი აკმაყოფილებს პირობას ბრუნდება true,
// ხოლო წინააღმდეგ შემთხვევაში, ერთმა ელემენტმაც რომ ვერ დააკმაყოფილოს პირობა, ბრუნდება false

let testArray = [10, 20, 30, 40, 50];
let testArray2 = [0, 10, 20, 30, 40, 50];

function test(number) {
    return number > 0;
}

console.log(testArray.every(test));
console.log(testArray2.every(test));

// მეთოდი filter - ქმნის ახალ მასივს იმ ელემენტებით, რომლებიც აკმაყოფილებენ ჩვენს მიერ მიწოდებულ პირობას
students = [
    { name: "George", age: 18 },
    { name: "Ana", age: 16 },
    { name: "Nino", age: 19 },
    { name: "Aka", age: 30 },
    { name: "Gio", age: 17 },
];

let minorStudents = students.filter((student) => student.age < 18);
console.log(minorStudents);
