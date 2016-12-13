const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        console.log('unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDb server');

    db.collection('Users').find({ name: 'Vika' }).toArray().then((docs) => {
        console.log(`Users:`);
        console.log(JSON.stringify(docs, undefined, 2));
    }, (err) => {
        console.log('unable to fetch todos', err);
    }); 

    db.close();
});