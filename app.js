console.log('Starting app');

const fs = require('fs');
const yargs = require('yargs');
const _ = require('lodash');
const notes = require('./notes.js');

const argv = yargs.argv;

var command = argv._[0];
console.log('Yargs: ', argv);


if (command === 'add') {
    var note = notes.addNote(argv.title, argv.body);
    if (note === undefined) {
        console.log('Note is not created');
    } else {
        console.log(`Note added with title: ${note.title}`);
    }
} else if (command === 'list') {
    notes.getAll();
} else if (command === 'read') {
    notes.readNote(argv.title);
} else if (command === 'remove') {
    var isRemoved = notes.removeNote(argv.title);
    var removedMessage = isRemoved ? 'Note was removed' : 'Note not found';
    console.log(removedMessage);
} else {
    console.log('Command not recognized');
}