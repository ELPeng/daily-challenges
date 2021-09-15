/*
Given a string of characters, return the character that appears the most often.

describe("Max Character", () => {
 it("Should return max character", () => {
  assert.equal(max("Hello World!"), "l");
 });
});

No String or Array Methods (well brute force it first, but then no methods)! 
*/

function maxCharacter(str){
    const characters = {}
    let maxCount = 0
    let maxChar = ''

    for(let char of str){
        characters[char] = characters[char] + 1 || 1
    }
    for (const char in characters){
        if(characters[char] > maxCount){
            maxCount = characters[char]
            maxChar = char
        }
    }
    return maxChar  
}

// create object for storing characters and their count
// loop through string 
// check if character exists in string already
// if not, produce a new character property and store count: 1
// if it does exist, increment property value by 1


console.log(maxCharacter('hello world'))