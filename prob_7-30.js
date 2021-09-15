/*
You will be given an array of strings and your task is to remove all consecutive duplicate letters from each string in the array.

For example:

dup(["abracadabra","allottee","assessee"]) = ["abracadabra","alote","asese"].
dup(["kelless","keenness"]) = ["keles","kenes"].
Strings will be lowercase only, no spaces 

Test.assertDeepEquals(dup(["ccooddddddewwwaaaaarrrrsssss","piccaninny","hubbubbubboo"]),['codewars','picaniny','hubububo']);
Test.assertDeepEquals(dup(["abracadabra","allottee","assessee"]),['abracadabra','alote','asese']);
Test.assertDeepEquals(dup(["kelless","keenness"]), ['keles','kenes']);
Test.assertDeepEquals(dup(["Woolloomooloo","flooddoorroommoonlighters","chuchchi"]), ['Wolomolo','flodoromonlighters','chuchchi']);
*/

// argument: takes in an array of strings
// evaluate each string and remove duplicate letters
// check if consecutive index values are the same, and remove all but one instance of that character

function dup(arr){
    return arr.map(word => word.split('').filter((char, i) => char !== str[i+1]).join(''))
}

function removeDup(str){
    return str.split('').filter((char, i) => char !== str[i+1])
}
