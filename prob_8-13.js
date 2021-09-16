/*
Given an array of items, reverse the order.

No reverse method! Unless that is your brute force first...
*/

function solve(arr){
    let lastInd = arr.length - 1
    for(let i = 0; i<arr.length/2; i++, lastInd--){
        const temp = arr[i]
        arr[i] = arr[lastInd]
        arr[lastInd] = temp
    }
    return arr
}

console.log(solve([1, 2, 3, 4, 5]))