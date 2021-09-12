/*
The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.

Examples
"din"      =>  "((("
"recede"   =>  "()()()"
"Success"  =>  ")())())"
"(( @"     =>  "))((" 
*/

function solve(str){
    return str
        .toLowerCase()
        .split('')
        .map((char, i, s) => {
            return s.indexOf(char) !== s.lastIndexOf(char) ? ")" : "("
        })
        .join('')
}

console.log(solve("Success"))


