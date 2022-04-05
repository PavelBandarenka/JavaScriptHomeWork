/* 002

"use strict";


let number = 5;

const obj = {
    a: 50
};

obj.a = 10;
console.log(obj);

{
    var result = 50;
}

console.log(result);
*/

// 003 Data Types

/*
let number = 4.6;
console.log(4/0);
console.log('string' *9 );

const person = 'Alex';
const bool = true;

console.log (something);
let und;
console.log();

const obj = {
name: "John",
age: 25,
isMarried: false
};

console.log(obj.name);
console.log(obj['name']);

let arr = ['one', 'two', 'three', {}, [1,2,3]];
console.log(arr[4]);
*/

// 004

/*
alert('hello');

const result = confirm('Are you here?');   // всплывающее окно
console.log(result);

const answer = prompt('Are you 18?', '18');  // всплывающее окно
console.log(answer);
console.log(typeof(answer));    // string

const answers = [];
answers[0] = prompt('Name?', '');
answers[1] = prompt('SurName?', '');
answers[2] = prompt('Age?', '');

console.log(answers);
*/

//005

/*
const category = 'toys';
console.log(`https://someurl.com/${category}/5`); // ${variable}

const user = 'Ivan';
alert(`Hello ${user}`);
*/

//006

console.log('arr' + " - object");

let increment = 10,
    decrement = 10;

++increment; //pre - sperva increm potom v consoli otvet
decrement--; //post - sperva staroe v consoli potom plusyet
console.log('incr - ' + increment++ + ' decr - ' + decrement--);

// = equals, == equals by meaning?, === strong equals by type? 

const isChecked = true;
const isClose = true;
console.log(isChecked && isClose); // if all true
console.log(isChecked || isClose); // if only one true then == true
console.log(isChecked || !isClose);// ! - reverts 
// !=   - notEquals

