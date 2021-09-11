/*
Count all the occurring characters in a string. If you have a string like aba, then the result should be {'a': 2, 'b': 1}.

What if the string is empty? Then the result should be empty object literal, {}.
*/

function solve(str){
    let obj = {}
    str.split('').forEach(char => {
        char in obj ? obj[char]++ : obj[char] = 1
    })
    return obj
}

console.log(solve(''))

// convert string to array
// loop through each char in array
//      check if array element exists as property in obj
//      if not, create property for  element in array 


// Optimal Solution

function count (string) {  
    var count = {};
    string.split('').forEach(function(s) {
       count[s] ? count[s]++ : count[s] = 1;
    });
    return count;
  }