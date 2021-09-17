/*
You are given an array prices where prices[i] is the price of a given stock on the ith day.

You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.

Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.

Input: prices = [7,1,5,3,6,4]
Output: 5

Input: prices = [7,6,4,3,1]
Output: 0
*/

// max profit is buy low sell high
// however, the max must come after the minimum

function profit(arr){
    let min = 9999999
    let maxDiff = 0

    for(let price of arr){
        if(price < min)
            min = price
        if(price - min > maxDiff)
            maxDiff = price - min
    }
    return maxDiff
}

console.log(profit([7,6,5,4,3, 3, 12, 2, 4, 15, 1, 10]))