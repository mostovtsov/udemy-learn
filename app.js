console.log('Starting app');

const fs = require('fs');
const os = require('os');
const _ = require('lodash');
const notes = require('./notes.js');


// var res = notes.addNote();

console.log(_.isString(true));
console.log(_.isString('Sasha'));


var filteredArray = _.uniq(['Sasha', 1, 'Sasha',1,2,3,4]);

console.log(filteredArray);

// console.log(res);


// console.log('Result:', notes.add(9, -2));

// var user = os.userInfo();

// fs.appendFile('greetings.txt', `Hello ${user.username}! Yoy are ${notes.age}.`);


