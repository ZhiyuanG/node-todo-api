var mongoose = require('mongoose');

var Todo = mongoose.model('Todo', {
    text: {
        type: String
    },
    complete: {
        type: Boolean
    },
    completeAt: {
        type: Number
    }
});

module.exports = {
    Todo: Todo
}