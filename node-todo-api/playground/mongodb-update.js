const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        console.log('unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDb server');

    db.collection('Users').findOneAndUpdate({
        _id: new ObjectID("584fa0d554528025d87a65f5")
    }, {
            $set: {
                age: 29,
                name: 'Alexander'
            }
        }, {
            returnOriginal: false
        }).then((result) => {
            console.log(result);
        });

    db.close();
});