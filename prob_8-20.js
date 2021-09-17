/*
Given an array nums of size n, return the majority element.

The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.

Example 1:

Input: nums = [3,2,3]
Output: 3
Example 2:

Input: nums = [2,2,1,1,1,2,2]
Output: 2
*/


function majority(arr){
    const hashMap = {}
    const majorityCount = arr.length/2
    let majorityVal
    arr.forEach(el => {
        if(!hashMap[el])
            hashMap[el] = 1
        else   
            hashMap[el]++
    })

    for(let key in hashMap){
        if(hashMap[key] > majorityCount)
            majorityVal = key
    }
    return majorityVal
}

console.log(majority([2, 2, 1, 1, 1, 3, 3, 2, 3, 3, 3, 3, 3]))