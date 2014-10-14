var express = require('express');
var app = express();
var ca = require('./app/ca');


var messages = new (require('./app/messages'))();

var router = new (require('./app/router'))({
    app : app,
    messages: messages
});


var server = app.listen(5178);