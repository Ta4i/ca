
var express = require('express');
var path = require('path');

var Router = function(options){

    this.app = options.app;
    delete options.app;
    
    this.messages = options.messages;
    delete options.messages;

    this.initApp();
    
};

Router.prototype.initApp = function(){
    var app = this.app;

    var staticPath = path.normalize(__dirname + '/../client');

    console.log('PATH:' + staticPath);

    app.use(express.static(staticPath));

    app.get('/', function (req, res) {
        res.render(staticPath + '/index.html');
    });
    
};

module.exports = Router;