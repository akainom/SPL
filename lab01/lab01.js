

let a = 5; // number
let name = "Name"; // string
let I = 0; // number
let double = 0.23; // number
let result = 1 / 0; // number (Infinity)
let answer = true; // boolean
let no = null; // object (специальное значение)

let squareSide = 5;
let rectangleWidth = 45;
let rectangleHeight = 21;
let squaresInWidth = Math.floor(rectangleWidth / squareSide);
let squaresInHeight = Math.floor(rectangleHeight / squareSide);
let totalSquares = squaresInWidth * squaresInHeight; // 36

let o = 2;
let u = o++;
let p = ++o;
console.log(u == p, o, u, p);
// a и b равны

const compare = (x, y) => x == y ? 'равны' : 'не равны';

console.log(compare("Котик", "котик")); // не равны
console.log(compare("Котик", "китик")); // не равны
console.log(compare("Кот", "Котик")); // не равны
console.log(compare("Привет", "Пока")); // не равны
console.log(compare(73, "53")); // не равны
console.log(compare(false, 0)); // равны
console.log(compare(54, true)); // не равны
console.log(compare(123, false)); // не равны
console.log(compare(true, "3")); // не равны
console.log(compare(3, "5мм")); // не равны
console.log(compare(8, "-2")); // не равны
console.log(compare(34, "34")); // равны
console.log(compare(null, undefined)); // не равны

let userName = prompt("Введите имя:");
let teacherNames = ["Николай", "Николай Иванович", "Белодед Николай Иванович"];

if (teacherNames.some(name => name.toLowerCase() === userName.toLowerCase())) {
    alert("Введенные данные верные");
} else {
    alert("Имя не совпало");
}

let russian = false;
let math = false;
let english = false;

if (prompt("Сдал ли студент математику?") == "да")
{
    math = true;
    console.log("матеша", math);
}
if (prompt("Сдал ли студент русский?") == "да")
{
    russian = true;
    console.log("рус", russian);
}
if (prompt("Сдал ли студент английский?") == "да")
{
    english = true;
    console.log("англ", english);
}

if (math && russian && english)
{
    console.log("Студент сдал все экзамены");
}

else console.log("Студента ожидает пересдача");

console.log(true + true); // 2
console.log(0 + "5"); // "05"
console.log(5 + "мм"); // "5мм"
console.log(8 / Infinity); // 0
console.log(9 * "\n9"); // 81
console.log(null - 1); // -1
console.log("5" - 2); // 3
console.log("5px" - 3); // NaN
console.log(true - 3); // -2
console.log(7 || 0); // 7

for (let i = 1; i <= 10; i++) {
    if (i % 2 === 0) {
        console.log(i + 2);
    } else {
        console.log(`${i}мм`);
    }
}

let dayNumber = parseInt(prompt("Введите номер дня недели:"));
let daysArray = ["пн", "вт", "ср", "чт", "пт", "сб", "вс"];
let daysObject = {1: "пн", 2: "вт", 3: "ср", 4: "чт", 5: "пт", 6: "сб", 7: "вс"};
console.log(params(10, 20));
console.log(paramsArrow(10, 20));
console.log(paramsExpr(10, 20));
console.log(daysArray[dayNumber - 1]);
console.log(daysObject[dayNumber]);

function createString(param1 = "default", param2, param3) {
    return `${param1} ${param2} ${param3}`;
}

let userInput = prompt("Введите третий параметр:");
console.log(createString(undefined, "second", userInput));

// Function Declaration
function params(a, b) {
    return a === b ? 4 * a : a * b;
}

// Function Expression
const paramsExpr = function(a, b) {
    return a === b ? 4 * a : a * b;
};

// Arrow Function
const paramsArrow = (a, b) => a === b ? 4 * a : a * b;
