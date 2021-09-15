/*
You will be given an array of numbers. You have to sort the odd numbers in ascending order while leaving the even numbers at their original positions.

Examples
[7, 1]  =>  [1, 7]
[5, 8, 6, 3, 4]  =>  [3, 8, 6, 5, 4]
[9, 8, 7, 6, 5, 4, 3, 2, 1, 0]  =>  [1, 8, 3, 6, 5, 4, 7, 2, 9, 0]

assert.deepEqual(sortArray([5, 3, 2, 8, 1, 4]), [1, 3, 2, 8, 5, 4]);
assert.deepEqual(sortArray([5, 3, 1, 8, 0]), [1, 3, 5, 8, 0]);
*/


// function solve(arr){
//     let j = 0
//     const oddArr = arr.filter(el => el%2 == 1).sort((a, b) => a - b) 
//     const newArr = arr
//     for(let i = 0; i<arr.length; i++){
//         if(newArr[i] % 2 == 1){
//             newArr.splice(i, 1, oddArr[j])
//             j++
//         }
//     }
//     return newArr
// }

function solve(arr){
    const oddArr = arr.filter(el => Math.abs(el) % 2 == 1).sort((a, b) => a - b) 
    return arr.map(el => Math.abs(el) % 2 == 1 ? oddArr.shift() : el)
}

// sort the odd numbers in ascending order
// create new array with just odd numbers and sort
// loop through original array and replace odd numbers with order from new array
// leave even numbers at position


console.log(solve([5, 3, 2, 8, 1, 4]))