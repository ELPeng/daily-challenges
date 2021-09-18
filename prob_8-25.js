/*
You're given strings jewels representing the types of stones that are jewels, and stones representing the stones you have. Each character in stones is a type of stone you have. You want to know how many of the stones you have are also jewels.

Letters are case sensitive, so "a" is considered a different type of stone from "A".

Example 1:

Input: jewels = "aA", stones = "aAAbbbb"
Output: 3
Example 2:

Input: jewels = "z", stones = "ZZ"
Output: 0
 

Constraints:

1 <= jewels.length, stones.length <= 50
jewels and stones consist of only English letters.
All the characters of jewels are unique.
*/

// turn jewels into array and split to get each char = jewel
// turn stones into hashamp
// sum up the jewels by accessing them as props in the hashmap

function solve(jewels, stones){
    const stonesMap = {}

    for(let stone of stones){
        if(stonesMap[stone])
            stonesMap[stone]++
        else stonesMap[stone] = 1
    }
    console.log(stonesMap)
    return jewels.split('').reduce((sum, jewel) => {
        if(stonesMap[jewel])
            return sum+stonesMap[jewel]
        else return sum
    }, 0)
}

console.log(solve(jewels = "ebd", stones = "bbb"))