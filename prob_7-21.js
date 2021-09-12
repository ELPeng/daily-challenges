/*
In this Kata, you will be given an array of unique elements, and your task is to rearrange the values so that the first max value is followed by the first minimum, followed by second max value then second min value, etc.

For example:

solve([15,11,10,7,12]) = [15,7,12,10,11]
The first max is 15 and the first min is 7. The second max is 12 and the second min is 10 and so on.

Test.assertDeepEquals(solve([15,11,10,7,12]),[15,7,12,10,11]);
Test.assertDeepEquals(solve([91,75,86,14,82]),[91,14,86,75,82]);
Test.assertDeepEquals(solve([84,79,76,61,78]),[84,61,79,76,78]);
Test.assertDeepEquals(solve([52,77,72,44,74,76,40]),[77,40,76,44,74,52,72]);
Test.assertDeepEquals(solve([1,6,9,4,3,7,8,2]),[9,1,8,2,7,3,6,4]);
Test.assertDeepEquals(solve([78,79,52,87,16,74,31,63,80]),[87,16,80,31,79,52,78,63,74]);
*/

// sort to arrange the array in order of large to small
// set constant to length of array
// return a new array where even index are descending large numbers and odd index are ascending small numbers

function solve(arr){
    const sortedArr = arr.sort((a, b) => b - a)
    let newArr = []
    let index = 0
    for(let i = 0; i<arr.length/2; i++){
        newArr.push(sortedArr[i])
        newArr.push(sortedArr[arr.length - 1 - i])
    }
    if(arr.length % 2) newArr.pop()
    return newArr
}

console.log(solve([15,11,10,7,12]))
console.log(solve([52,77,72,44,74,76,40]))

// Optimal Solution

function solve(arr){
    var minMax = [];
    arr.sort((a,b)=>a-b);
    for(var i = 0, j = arr.length-1; i <= j; i++,j--){
      if(i != j) minMax.push(arr[j]), minMax.push(arr[i]);
      else minMax.push(arr[i]);
    }
    return minMax;
  }