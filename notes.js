console.log('Starting app.js');
//console.log(module);

module.exports.age = 28;

var addNote = (title, body) => {
    console.log('Adding note', title, body)
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