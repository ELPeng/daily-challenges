/*
Write a function that takes a single string (word) as argument. The function must return an ordered list containing the indexes of all capital letters in the string.

Example
Test.assertSimilar( capitals('CodEWaRs'), [0,3,4,6] );
*/


function capitals(str){
    return Array.from(str).map((el, i) => el === el.toUpperCase() ? i : null).filter(el => el !== null)
}

console.log(capitals('CodEWaRs'))