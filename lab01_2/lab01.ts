function convert(arr: Array<number>) {
    if (arr.length < 10) return "Error";
    return `(${arr[0]}${arr[1]}${arr[2]}) ${arr[3]}${arr[4]}${arr[5]} - ${arr[6]}${arr[7]}${arr[8]}${arr[9]}`
}

let arr: Array<number>;
arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(convert(arr)); 

class Challenge {
    static solution(num: number) {
       if (num < 0 || num ==  0) return 0;

       let sum: number = 0;

       for (var i = 0;i < num; i++) {
        if (i % 3 == 0 || i % 5 == 0) {
            sum += i;
        }
       }

       return sum;
      }
    }

let test: number = 10;
console.log(Challenge.solution(test));

function ShiftArray(arr: Array<number>, steps: number) {
    for (var i = 0; i < steps; i++)
    {
        arr.unshift(arr[arr.length - 1]);
        arr.pop();
    }
}

let task3 = [1, 2, 3, 4, 5, 6];
ShiftArray(task3, 1);
console.log(task3);

function FindMedian(nums1: Array<number>, nums2: Array<number>) {
    let newArray = nums1.concat(nums2);
    newArray.sort((a, b) => a - b);

    let median = 0;

    if (newArray.length % 2 == 0) {
        let right = newArray[(newArray.length / 2)];
        let left = newArray[(newArray.length / 2) - 1];

        median = (left + right) / 2;
    }

    else median = newArray[(newArray.length / 2) - 0.5];

    return median
}

let nums1 = [1, 3];
let nums2 = [2];

let med = FindMedian(nums1, nums2);
console.log(med);