//"use strict";

const soldier = {
    health: 400, 
    armor: 150,
    sayHello: function() {
        console.log("Hello");
    }
};

const john = Object.create(soldier);

// const john = {
//     health: 100
// };

//john.__proto__ = soldier; //staroe

//Object.setPrototypeOf(john, soldier); //novoe

//console.log(soldier);
john.sayHello();