function createCounter() {
    let countValue = 1;

    return function () {
        return countValue++;
    };
}

let primaryCounter = createCounter();

console.log(primaryCounter()); // 1
console.log(primaryCounter()); // 2
console.log(primaryCounter()); // 3
let secondaryCounter = createCounter();
console.log(secondaryCounter()); // 1

let globalCount = 1;

function createCounterV2() {
    return function () {
        return globalCount++;
    };
}

console.log("\n Вариант 2");
let counterA = createCounterV2();
let counterB = createCounterV2();

console.log(counterA()); // 1
console.log(counterA()); // 2

console.log(counterB()); // 3
console.log(counterB()); // 4

function calculateVolume(length) {
    return (width, height) => {
        return length * width * height;
    };
}

const volumeCalculator = calculateVolume(15);
console.log(volumeCalculator(30, 15)); // 675
console.log(calculateVolume(35)(15, 45)); // 23625

function* movementGenerator() {
    let posX = 0;
    let posY = 0;
    for (let step = 0; step < 10; step++) {
        const direction = yield { x: posX, y: posY };

        switch (direction) {
            case "left":
                posX -= 5;
                break;
            case "up":
                posY += 5;
                break;
            case "right":
                posX += 5;
                break;
            case "down":
                posY -= 5;
                break;
            default:
                console.log("неверное направление");
        }
        console.log("Текущая позиция: x =", posX, "y =", posY);
    }
}

let moveGen = movementGenerator();
moveGen.next(); // Инициализация генератора

// for (let i = 0; i < 10; i++) {
//     const directionInput = prompt("Введите: left, right, up, down");
//     console.log(moveGen.next(directionInput)); // Передача направления в генератор
// }

window.sharedMap = new Map();
window.sharedCounter = 1221;
window.testVariable = "тестовая строка";

let a = 0;
window.a = 10;
console.log(a);

window.globalCount = 10;
console.log(globalCount);


