console.log('Starting app.js');

const fs = require('fs');

var fetchNotes = () => {
    try {
        var notesString = fs.readFileSync('notes-data.json');
        return JSON.parse(notesString);
    } catch (e) {
        return []
    }
};

var saveNotes = (notes) => {
    fs.writeFileSync('notes-data.json', JSON.stringify(notes));
};


var addNote = (title, body) => {
    
    var notes = fetchNotes();
    var note = {
        title,
        body
    };   
    var duplicatesNotes = notes.filter((note) => note.title === title);

    if (duplicatesNotes.length === 0) {
        notes.push(note);
        saveNotes(notes);
        return note;
    }
};

var readNote = (title) => {
    console.log('Reading note', title)
};

var removeNote = (title) => {
    var notes = fetchNotes();
    var notesWithoutThis = notes.filter((note) => note.title !== title);
    if (notesWithoutThis) {
        saveNotes(notesWithoutThis);
    } 

    return notes.length !== notesWithoutThis.length;
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