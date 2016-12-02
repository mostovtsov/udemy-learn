//console.log('Starting app.js');

const fs = require('fs');

var logNote = (note) => {
    debugger;
    console.log('------------');
    console.log(`Title: ${note.title}`);
    console.log(`Title: ${note.body}`);
}

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
    var notes = fetchNotes();
    var filteredNotes = notes.filter((item) => item.title === title);
    if (filteredNotes) {
        return filteredNotes[0] !== undefined ? filteredNotes[0] : null;
    }
    return null;
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
    return fetchNotes();
}

module.exports = {
    addNote,
    getAll,
    readNote,
    removeNote,
    logNote
}
