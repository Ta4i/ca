var express = require('express');
var app = express();
var hbs = require('hbs');

app.engine('html', hbs.__express);
app.set('views', './app/pages');
app.set('view engine', 'html');
app.set("view options", { layout: false });

app.use(express.static('client'));

var StartPage = require('./app/pages/StartPage');

var pages = {
    main : new StartPage({
        app: app
    })
};

var server = app.listen(3000, function () {

  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);

});