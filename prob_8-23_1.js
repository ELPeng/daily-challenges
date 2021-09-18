/*
Given an array of integers nums.

A pair (i,j) is called good if nums[i] == nums[j] and i < j.

Return the number of good pairs.

Example 1:

Input: nums = [1,2,3,1,1,3]
Output: 4
Explanation: There are 4 good pairs (0,3), (0,4), (3,4), (2,5) 0-indexed.
Example 2:

Input: nums = [1,1,1,1]
Output: 6
Explanation: Each pair in the array are good.
Example 3:

Input: nums = [1,2,3]
Output: 0
*/

// create a hashmap of the array
// if count for prop > 1, calculate total pairs for that num
// repeat this for all props where prop > 1
// sum total pairs and return result


function solve1(arr){
    const pairObj = {}
    let pairTotal = 0
    arr.forEach(num => {
        if(pairObj[num])
            pairObj[num]++
        else pairObj[num] = 1
    })

    for (let key in pairObj){
        if(pairObj[key] > 1)
            pairTotal += pairObj[key]*(pairObj[key] - 1)/2
    }
    return pairTotal
}

// Optimal Solution

function solve2(arr){
    const map = {}
    let total = 0
    for(let num of arr){
        if(map[num]){
            total += map[num]
            map[num]++
        } else{
            map[num] = 1
        }
    }
    return total
}

console.log(solve1([1, 8, 1,2, 1, 1, 2, 8, 8, 8]))
console.log(solve2([1, 8, 1,2, 1, 1, 2, 8, 8, 8]))