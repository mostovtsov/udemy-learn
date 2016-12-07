const utils = require('./utils');

it('sould add two numbers', () => {
    var res = utils.add(33, 11);
    var expected = 44;
    if (res !== expected) {
        throw new Error(`Expected ${expected}, but got ${res}`);
    }

});

it('sould square a number', () => {
    var res = utils.square(10);
    var expected = 100;
    if (res !== expected) {
        throw new Error(`Expected ${expected}, but got ${res}`);
    }

});