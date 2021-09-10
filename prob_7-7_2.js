/*
Return the number of unique arrays that can be formed by picking exactly one element from each subarray.

For example: solve([[1,2],[4],[5,6]]) = 4, because it results in only 4 possibilites. They are [1,4,5],[1,4,6],[2,4,5],[2,4,6].

Make sure that you don't count duplicates; for example solve([[1,2],[4,4],[5,6,6]]) = 4, since the extra outcomes are just duplicates.

Test.assertEquals(solve([[1,2],[4],[5,6]]),4);
Test.assertEquals(solve([[1,2],[4,4],[5,6,6]]),4);
Test.assertEquals(solve([[1,2],[3,4],[5,6]]),8);
Test.assertEquals(solve([[1,2,3],[3,4,6,6,7],[8,9,10,12,5,6]]),72);
*/



// Create a new array that consists of one number from each subarray


function solve(arr){
    return arr.map(subArr => [...new Set(subArr)].length)
        .reduce((acc, val) => acc*val)
}

console.log(solve([[1,2,3],[3,4,6,6,7],[8,9,10,12,5,6]]))