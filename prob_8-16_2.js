/*
Given a magazine of words and a ransom note, determine if it’s possible to “cut out” and create the ransom note from the magazine words.

const magazine =
 "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum";

describe("Ransom Note", () => {
 it("Should return true", () => {
  assert.equal(ransomNote("sit ad est sint", magazine), true);
 });

it("Should return false", () => {
  assert.equal(ransomNote("sit ad est love", magazine), false);
 });

it("Should return true", () => {
  assert.equal(ransomNote("sit ad est sint in in", magazine), true);
 });

it("Should return false", () => {
  assert.equal(ransomNote("sit ad est sint in in in in", magazine), false);
 });
});
*/

// function takes in two arguments, first one is the ransom note message, second is the magazine that you will be pulling words from 
// check if each word in the ransom note exists in the magazine string
// create array of ransom note words using 'split' and loop through to determine if word exists using indexOf(x) !== -1

const magazine =
 "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum";

// function ransomNote(note, magazine){
//     const wordArr = note.split(' ')
//     const magArr = magazine.split(' ')
//     for(let i = 0; i<wordArr.length; i++){
//         if(magArr.indexOf(wordArr[i]) !== -1){
//             magArr.splice(magArr.indexOf(wordArr[i]), 1) 
//         }
//         else return false
//     }
//     return true
// }

console.log(ransomNote("sit ad est sint in in in in", magazine))

function ransomNote(note, magazine){
    const magazineObj = {}
    magazine.split(' ').forEach(word => {
        magazineObj[word] ? magazineObj[word]++ : magazineObj[word] = 1
    })
    const noteArr =note.split(' ')
    for(let i = 0; i<noteArr.length; i++){
        if(magazineObj[noteArr[i]])
            magazineObj[noteArr[i]]--
        else return false
    }
    return true
}