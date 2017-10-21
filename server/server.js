var express = require('express');
var bodyParser = require('body-parser');

var mongoose = require('./db/mongoose');
var Todo = require('./models/todo').Todo;
var User = require('./models/user').User;

var app = express();

app.use(bodyParser.json());

app.post('/todos', (req, res) => {
    var todo = new Todo({
        text: req.body.text
    });

    todo.save().then((doc) => {
        res.send(doc);
    }, (e) => {
        res.status(400).send(e);
    });
});

app.listen(3000, () => {
    console.log('Start listening on port 3000');
})