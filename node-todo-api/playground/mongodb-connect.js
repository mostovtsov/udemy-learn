//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

// var obj = new ObjectID();
// console.log(obj);

// var user = { name: 'Sasha', age: 28 };
// var {name} = user;
// console.log(name);

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        console.log('unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDb server');

    // db.collection('Todos').insertOne({
    //     text: 'something to do',
    //     completed: false
    // }, (err, result) => {
    //     if (err) {
    //         return console.log('unable to insert todo', err);
    //     }

    //     console.log(JSON.stringify(result.ops))
    // })

    db.collection('Users').insertOne({
        name: 'Sasha with id',
        age: 28,
        location: 'Gomel, Belarus'
    }, (err, result) => {
        if (err) {
            return console.log('unable to insert User', err);
        }

        console.log(result.ops[0]._id.getTimestamp());
    })

    db.close();
});