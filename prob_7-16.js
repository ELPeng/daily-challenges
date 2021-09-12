/*
Given a string of words, you need to find the highest scoring word.

Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3 etc.

You need to return the highest scoring word as a string.

If two words score the same, return the word that appears earliest in the original string.

All letters will be lowercase and all inputs will be valid.

Test.assertEquals(high('man i need a taxi up to ubud'), 'taxi');
Test.assertEquals(high('what time are we climbing up the volcano'), 'volcano'); 
Test.assertEquals(high('take me to semynak'), 'semynak'); 
*/

// split the string into an array, separating by space
// use charCodeAt() to assign point value to each letter
// sum up the point values for all characters in a word (arr element)
// compare point total for each word in array to highPointVal variable
// store the word with the highest point value
// store the highest point value


function solve(str){
    const wordArr = str.split(' ')
    const valArr = wordArr.map((word) => {
        return word.split('').reduce((sum, char, i) => sum + word.charCodeAt(i) - 96, 0)
    })
    const hiVal = Math.max(...valArr)
    return wordArr[valArr.indexOf(hiVal)]
}

console.log(solve('take me to semynak'))