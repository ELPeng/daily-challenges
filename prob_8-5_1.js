/*
Your job is to figure out the index of which vowel is missing from a given string:

A has an index of 0,
E has an index of 1,
I has an index of 2,
O has an index of 3,
U has an index of 4.
Notes: There is no need for string validation and every sentence given will contain all vowles but one. Also, you won't need to worry about capitals.

Examples
"John Doe hs seven red pples under his bsket"          =>  0  ; missing: "a"
"Bb Smith sent us six neatly arranged range bicycles"  =>  3  ; missing: "o"
*/


function solve(str){
    const vowels = ['a', 'e', 'i', 'o', 'u']
    const missingVowel = vowels.filter(vowel => !str.includes(vowel))[0]

    return vowels.indexOf(missingVowel)
}

function solve(str){
    const vowels = ['a', 'e', 'i', 'o', 'u']
    return vowels.filter(vowel => str.indexOf(vowel) === -1)[0]
}

console.log(solve("Bb Smith sent us six neatly arranged range bicycles" ))