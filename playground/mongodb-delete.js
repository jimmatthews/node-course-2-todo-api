const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log('Unable to connect to MongoDB server', err);
    }
    console.log('Connected to MongoDB server');

    // deleteMany
    // db.collection('Todos').deleteMany({
    //     text: 'Eat lunch'
    // }).then((result) => {
    //     console.log(result);
    // });

    // deleteOne
    // db.collection('Todos').deleteOne({
    //     text: 'Eat lunch'
    // }).then((result) => {
    //     console.log(result);
    // });

    // findOneAndDelete
    // db.collection('Todos').findOneAndDelete({
    //     completed: false
    // }).then((result) => {
    //     console.log(result);
    // });

    // delete all Jims
    db.collection('Users').deleteMany({
        user: 'Jim'
    }).then((result) => {
        console.log(result);
    });

    // delete one by ObjectID
    db.collection('Users').findOneAndDelete({
        _id: new ObjectID("58cc540f7749cb78ead47f36")
    }).then((result) => {
        console.log(result);
    });

    //db.close();
});