const expect = require('expect');
const utils = require('./utils');

it('should add two numbers', () => {
    var res = utils.add(33, 11);
    var expected = 44;

    expect(res).toBe(expected).toBeA('number');
});

it(`should square a number`, () => {
    var res = utils.square(10);
    var expected = 100;

    expect(res).toBe(expected).toBeA('number');
});

// it('should expect some values', () => {
//     //expect({ name: 'Sasha' }).toEqual({ name: 'Sasha' });
//     //expect([2,3,4]).toInclude(3);


//     expect({
//         name: 'Sasha',
//         age: 28
//     }).toInclude({
//         age: 28
//     })
// });


it('should verify first and last names are set', () => {
    var user = { firstName: '', lastName: '' };
    var res = utils.setName(user, 'Alexander Mostovtsov');

    expect(res).toInclude({
        firstName: 'Alexander',
        lastName: 'Mostovtsov'
    })
})



