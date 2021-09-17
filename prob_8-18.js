/*
Given an array of numbers, return all pairs that add up to a given sum. The numbers can be used more than once.

describe("Two Sum", () => {
 it("Should implement two sum", () => {
  assert.deepEqual(twoSum([1, 2, 2, 3, 4], 4), [[2, 2], [3, 1]]);
 });
});
*/

// Basic Solution 
// function twoSum(arr, sum){
//     let pairs = []
//     for(let i = 0; i<=arr.length-2; i++){
//         for(let j = i+1; j<=arr.length-1; j++){
//             if(arr[i] + arr[j] === sum)
//                 pairs.push([arr[i], arr[j]])
//         }
//     }
//     return pairs
// }


// Optimal Solution 
// function twoSum(arr, sum){
//     const pairs = []
//     const store = []

//     for (let part1 of arr){
//         const part2 = sum - part1
//         if(store.indexOf(part2) !== -1)
//             pairs.push([part1, part2])
//         store.push(part1)
//     }
//     return pairs
// }

// twoSum([1, 2, 2, 3, 4], 4), [[2, 2], [3, 1]]
const twoSum = (array, sum) => {
    const pairs = [];
    const store = {}
  
    for (let part1 of array) {
      const part2 = sum - part1;

      if(!store[part2]){
        store[part1] = 1
      }else{
        pairs.push([part1,part2])
      }
    }
    return pairs;
  };


console.log(twoSum([1, 2, 2, 3, 4], 4))