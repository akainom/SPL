function flattenArray(arr)
{
    return arr.reduce((acc, val) => acc.concat(Array.isArray(val) ? flattenArray(val) : val),[])
}

const array44 = [1, 2, 3, 4];
console.log(array44.reduce((acc, sum) => sum+= acc, ));
function sumArray(array)
{
    return array.reduce((sum, element) => {
        return sum + (Array.isArray(element) ? sumArray(element) : element)
    })
}

function filterStudent(students)
{ 
    const result = {};

    for(var i = 0; i < students.length; i++){
        if (students[i].age > 17) {
            if (!result[students[i].groupId]) {
                result[students[i].groupId] = [];
            }
            else {
                result[students[i].groupId].push(students[i]);
            }
        }
    };
    return result;
}

function encryptASCII (string)
{
    let total1 = '', total2 = 0;
    for (var i = 0; i < string.length; i++)
    {
        total1+= string.charCodeAt(i);
    }
    total2 = total1.replace('7', '1');
    console.log(`total1 = ${total1}, total2 = ${total2}, total1 - total2 = ${total1 - total2}`);
}

function tower(levels) {
    const tower = [];
    for (let i = 1; i <= levels; i++) {
        const spaces = ' '.repeat(levels - i);
        const stars = '*'.repeat(2 * i - 1);
        const floor = spaces + stars + spaces;
        tower.push(floor);
    }
    return tower;
}

console.log(tower(5).join("\n"));

const array1 = [1, [1, 2[3, 4]], [2, 4]];
const array2 = [2, 3, [1, 1, [3, 3], 3], 4];

let result = flattenArray(array1).concat(flattenArray(array2))

console.log("Первый масиив - {", array1, "}, второй массив - {", array2, "}, flattenArray() - {", result, "}");

const array3 = [1, 1, [1, 1], 1];
console.log("Сумма элементов массива {", array3, "} = ", sumArray(array3));

const students = [
    {name: 'AA', age: 19, groupId: 4},
    {name: 'Aa', age: 18, groupId: 4},
    {name: 'aa', age: 20, groupId: 4},
    {name: 'BB', age: 19, groupId: 1},
    {name: 'Bb', age: 19, groupId: 1},
    {name: 'bb', age: 16, groupId: 3}
];

const filteredStudents = filterStudent(students);
console.log(filteredStudents);

let phrase = "ABC";
encryptASCII(phrase);

const extend = (...objects) => {
    return Object.assign({}, ...objects);
};

const result1 = extend( {a: 1, b: 2}, {c: 3} ) 
 // result === {a: 1, b: 2, c: 3}
 console.log(result1);

const result2 = extend( {a: 1, b: 2}, {c: 3}, {d: 4} ) 
 // result === {a: 1, b: 2, c: 3, d: 4}
 console.log(result2);

const result3 = extend( {a: 1, b: 2}, {a: 3, c: 3} ) 
 // result === {a: 1, b: 2, c: 3}
 console.log(result3);

