console.log('Starting app');

const fs = require('fs');
const yargs = require('yargs');
//const os = require('os');
const _ = require('lodash');
const notes = require('./notes.js');

const argv = yargs.argv;

var command = argv._[0];
//console.log('Command: ', command);
console.log('Yargs: ', argv);
//console.log(process.argv);


if (command === 'add') {
    notes.addNote(argv.title, argv.body);
} else if (command === 'list') {
    notes.getAll();
} else if (command === 'read') {
    notes.readNote(argv.title);
} else if (command === 'remove') {
    notes.removeNote(argv.title);
} else {
    console.log('Command not recognized');
}

// var res = notes.addNote();

// console.log(_.isString(true));
// console.log(_.isString('Sasha'));


// var filteredArray = _.uniq(['Kolia', 1, 'Sasha',1,2,3,4]);

// console.log(filteredArray);

// console.log(res);


// console.log('Result:', notes.add(9, -2));

// var user = os.userInfo();

// fs.appendFile('greetings.txt', `Hello ${user.username}! Yoy are ${notes.age}.`);


