/*
An ordered sequence of numbers from 1 to N is given. One number might have deleted from it, then the remaining numbers were mixed. Find the number that was deleted.

Example:

The starting array sequence is [1,2,3,4,5,6,7,8,9]
The mixed array with one deleted number is [3,2,4,6,7,8,1,9]
Your function should return the int 5.
If no number was deleted from the array and no difference with it, your function should return the int 0.

Note: N may be 1 or less (in the latter case, the first array will be []).

Test.assertEquals(findDeletedNumber([1,2,3,4,5], [3,4,1,5]), 2, 'Deletion')
Test.assertEquals(findDeletedNumber([1,2,3,4,5,6,7,8,9], [1,9,7,4,6,2,3,8]), 5, 'Deletion')
Test.assertEquals(findDeletedNumber([1,2,3,4,5,6,7,8,9], [5,7,6,9,4,8,1,2,3]), 0, 'No deletion')
*/


function findDeletedNumber(arr1, arr2){
    return arr1.length === arr2.length ? 0 : arr1.filter(el => !arr2.includes(el))[0]
}



console.log(findDeletedNumber([1,2,3,4,5,6,7,8,9], [1,9,7,4,6,2,3,8]))

// Determine if a number is deleted - check lengths of arrays
// If number deleted, loop through first array and check if each element is in the second array
// exit loop if the deleted element is found and return that element

// Optimal Solution
function findDeletedNumber(arr, mixArr) {
    return arr.filter(v=>mixArr.indexOf(v)==-1)[0]||0
  }
