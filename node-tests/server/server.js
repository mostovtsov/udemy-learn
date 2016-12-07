const express = require('express');

var app = express();

app.get('/', (req, res) => {
    res.status(404).send({ errorMessage: 'Page Not Found' });
});

app.get('/users', (req, res) => {
    var users = [
        {
            name: 'sasha',
            age: 28
        }, 
        {
            name: 'vova',
            age: 25
        },
        {
            name: 'marina',
            age: 26
        }
    ];
    res.status(200).send(users);
});

app.listen(3000);
module.exports.app = app;