"use strict";

const arr = [2,3,6,25,8,10];

arr.sort(compareNum);
console.log(arr);

function compareNum(a, b) {
    return a - b;
}


// arr[99] = 0;

// console.log(arr.length);
// console.log(arr);

// arr.forEach(function(item, i, arr) {
//     console.log(`индекс ${i}: цифра ${item} внутри массива ${arr}`);

// });

// const str = prompt("","");
// const products = str.split(", ");
// console.log(products);

//console.log(products.join("; "));


// arr.pop();
// console.log(arr);

// arr.push(9);
// console.log(arr);

// for (let i = 0; i < arr.length; i++)
// {
//     console.log(arr[i]);
// }

// for (let value of arr){
//     console.log(value);
// }