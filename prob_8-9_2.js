/*
Given a string of characters as input, write a function that returns it with the characters reversed. No Reverse Method (well brute force it first, but then no reverse method)! 
*/

function reverse(str){
    let reverseWord = []
    for(let i=str.length - 1; i >= 0; i--){
        reverseWord.push(str[i])
    }
    return reverseWord.join('')
}

console.log(reverse('hello there'))