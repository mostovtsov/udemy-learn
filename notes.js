console.log('Starting app.js');
console.log(module);

module.exports.age = 28;

module.exports.addNote = function() {
    console.log('add note');
    return 'New note';
};

module.exports.add = function(a, b) {
    return a + b;
};