"use strict";

let a = 5,
    b = a;

b = b + 5;

console.log(b);
console.log(a);

const obj = {
    a: 5,
    b: 1
};

// const copy = obj; //Ссылка

// copy.a = 10;

// console.log(copy);
// console.log(obj);

function copyFunc(mainObj)
{
    let objCopy = {};
    let key;

    for (key in mainObj){
        objCopy[key] = mainObj[key];
    }

    return objCopy;
}

const numbers = {
    a: 2,
    b: 5,
    c: {
        x: 7,
        y: 4
    }
};

// const newNumbers = copyFunc(numbers);
// newNumbers.a = 10;
// newNumbers.c.x = 99;


// console.log(numbers);
// console.log(newNumbers);

const add = {
    d: 17,
    e: 20
};

//console.log(Object.assign(numbers, add));

const clone = Object.assign({}, add);
clone.d = 99;

// console.log(add);
// console.log(clone);

const oldArray = ["a","b","c"];

const newArray = oldArray.slice();

newArray[1] = "blablabal";

console.log(newArray);
console.log(oldArray);

const video = ["youtube", "vimeo", "rutube"],
      blogs = ["wordpress", "livejournal", "blogger"],
      internet = [...video, ...blogs, "vk", "facebook"];
 
console.log(internet);

