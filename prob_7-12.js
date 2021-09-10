/*
Your task is to remove all consecutive duplicate words from a string, leaving only first words entries. For example:

"alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta"

--> "alpha beta gamma delta alpha beta gamma delta"
*/

function solve(str){
    return str.split(' ').filter((el, i, array) => el !== array[i+1]).join(' ')
}

console.log(solve("alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta"))