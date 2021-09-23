"use strict";

// function first(){
//     //do something
//     setTimeout(function(){
//         console.log(1);
//     }, 500);
// }

// function second(){
//     console.log(2);
// }

// first();
// second();

// function learnJS(lang, callback)
// {
//     console.log(`я учу: ${lang}`);
//     callback();
// }

// function done(){
//     console.log("я прошёл этот урок");
// }

// learnJS("JavaScript", done);

const options = {
    name: 'test',
    width: 1024,
    height: 1024,
    colors: {
        border: "black",
        bg: "red"
    }, 
    makeTest: function(){
        console.log("Test");
    }
};

// delete options.name;

// console.log(options);
// let counter = 0;
// for (let key in options) {
//     if(typeof(options[key]) === "object"){
//         for (let i in options[key]){
//             console.log(`Свойства ${i} имеет значение ${options[key][i]}`);
//         }
//     }else{
//     console.log(`Свойства ${key} имеет значение ${options[key]}`);
//     }
//     counter++;
// }
// console.log(counter);

console.log(Object.keys(options).length);
options.makeTest();

const{border, bg} = options.colors;

console.log(border);