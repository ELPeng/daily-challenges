/*
Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

Example 1:

Input: nums = [1,2,3,1]
Output: true
Example 2:

Input: nums = [1,2,3,4]
Output: false
Example 3:

Input: nums = [1,1,1,3,3,4,3,2,4,2]
Output: true
*/

function solve1(arr){
    let map = {}
    for(let num of arr){
        if(map[num])
            return true
        else if(!map[num])
            map[num] = 1
    }
    return false
}

// Optimal Solution
function solve2(arr){
    return arr.length !== [...new Set(arr)].length
}


console.log(solve1([1,3,2]))