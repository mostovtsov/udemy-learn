console.log('Starting app.js');

const fs = require('fs');

var addNote = (title, body) => {
    //console.log('Adding note', title, body)
    var notes = [];
    var note = {
        title,
        body
    };

    try {
        var notesString = fs.readFileSync('notes-data.json');
        notes = JSON.parse(notesString);
    } catch (e) {

    }

    var duplicatesNotes = notes.filter((note) => note.title === title);

    if (duplicatesNotes.length === 0) {
        notes.push(note);
        fs.writeFileSync('notes-data.json', JSON.stringify(notes));
    }
};

var readNote = (title) => {
    console.log('Reading note', title)
};

var removeNote = (title) => {
    console.log('Removing note', title)
};

var getAll = () => {
    console.log('Get all notes')
}

module.exports = {
    addNote,
    getAll,
    readNote,
    removeNote
}

// module.exports.add = function(a, b) {
//     return a + b;
// };