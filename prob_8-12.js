/*
Given a string of words or phrases, count the number of vowels.

No Regex! Unless that is your brute force...
*/

function solve(str){
    const lowerCaseStr = str.toLowerCase()
    // const vowels = ['a', 'e', 'i', 'o', 'u']
    const vowels = 'aeiou'
    let count = 0
    for (let char of lowerCaseStr){
        if(vowels.includes(char))
            count++
    }
    
    return count
}

console.log(solve('ASDFAAAAasdfei'))