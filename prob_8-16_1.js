/*
Given a phrase, reverse the order of the characters of each word.

describe("Reverse Words", () => {
 it("Should reverse words", () => {
  assert.equal(reverseWords("I love JavaScript!"), "I evol !tpircSavaJ");
 });
});

No Reverse Method! Unless that is your brute force...
*/

function reverseWords(str){

    return str.split(' ').map(word => {
        const wordArr = word.split('')
        for(let i=0; i<wordArr.length/2; i++){
            [wordArr[i], wordArr[wordArr.length-1-i]] =
            [wordArr[wordArr.length-1-i], wordArr[i]]
        }
        return wordArr.join('')

    }).join(' ')
}

console.log(reverseWords('hi my name is Eric'))