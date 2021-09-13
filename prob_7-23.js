/*
Given a string of words (x), you need to return an array of the words, sorted alphabetically by the final character in each.

If two words have the same last letter, they returned array should show them in the order they appeared in the given string.

All inputs will be valid.

Test.assertSimilar(last('man i need a taxi up to ubud'), ['a', 'need', 'ubud', 'i', 'taxi', 'man', 'to', 'up']);
Test.assertSimilar(last('what time are we climbing up the volcano'), ['time', 'are', 'we', 'the', 'climbing', 'volcano', 'up', 'what']); 
Test.assertSimilar(last('take me to semynak'), ['take', 'me', 'semynak', 'to']); 
*/

function solve(str){
    return str.split(' ').sort((a, b) => {
        if(a[a.length-1] > b[b.length-1])
            return 1
        else if ((a[a.length-1] < b[b.length-1]))
            return -1
        else    
            return 0
    })
}

console.log(solve('man i need a taxi up to ubud'))


// Optimal Solution
function last(x){
    return x.split(' ').sort((a, b) => a.charCodeAt(a.length - 1) - b.charCodeAt(b.length - 1));
  }