const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        console.log('unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDb server');

    //delete many
    // db.collection('Todos').deleteMany({complete: true}).then((result)=>{
    //     console.log(result);
    // });

    //delete one
    // db.collection('Todos').deleteOne({ completed: true }).then((result) => {
    //     console.log(result);
    // });

    //find one and delete
    db.collection('Users').findOneAndDelete({ age: 24 }).then((result) => {
        console.log(result);
    });

    //db.close();
});