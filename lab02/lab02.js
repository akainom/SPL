function basicOperation(operation, value1, value2) {
    if (operation == '+')
    {
        return value1 + value2;
    }
    if (operation == '-')
    {
        return value1 - value2;
    }
    if (operation == '*')
    {
        return value1 * value2;
    }
    if (operation == '/')
    {
        return value1 / value2;
    }

    return result;
}

cubSum = (number) => {
    for (var i = 0; i <= number; i++)
        {
            i**3;
        }
}


function avgArytmetical (array)
{
    let sum = 0;
    array.forEach(element => {
        sum+= element;
    });

    return (sum / array.length);
}

function stringReverse(inputString)
{
    let buff = ""
    for (var i = inputString.length-1; i >= 0; i--)
    {
        buff += inputString[i];
    }

    buff = buff.replace(/[^a-zA-Z]+/g, '');
    return buff;
}

function repeatString (string, n)
{
    let answer = "";
    for (var i = 0; i <= n; i++)
    {
        answer+=string;
    }
    return answer;
}
function stringArray(arr1, arr2)
{
    let arr3 = [];
    let index = 0;
    for (var i = 0; i < arr1.length; i++)
    {
        if(arr2.includes(arr1[i]) == false)
        {
            arr3[index++] = arr2[1];
        }
    }
    return arr3;
}
let result = basicOperation('+', Number(prompt("value1")), +prompt("value2")); // result = 15
console.log(result);
let number = prompt("Введите число(сумма кубов)");
console.log("Сумма кубов всех чисел от 1 до ", number, "равна ", cubSum(Number(number)));
let array = [1, 2, 3, 4, 5];
console.log("Среднее арифметическое элементов массива {1, 2, 3, 4, 5} = ", avgArytmetical(array));
var string = "string";
console.log("Входная строка - ", string, "\nРезультат выполнения функции stringReverse() - ", stringReverse(string));
console.log("Результат выполнения функции repeatString - ", repeatString("string", 2));
let arr1 = ["dsadas", "a", "asdada"];
let arr2 = ["dsads", "ds", "asdada"];
console.log("Результат выполнения функции stringArray - ", stringArray(arr1, arr2));
