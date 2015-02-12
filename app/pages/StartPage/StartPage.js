var path = require('path');
var Settings = require('../../Settings.js');

var MainPage = function(options){
    for(var name in options){
        this[name] = options[name];
        delete options[name];
    }
    
    this.app.get(Settings.ROUTES.index, this.init); // max
};
MainPage.prototype.init = function (req, res) {
    console.log('dirname' + __dirname + '/template.html');

    res.render('StartPage/template', {
        content: 'Hi ad daad d a da ad'
    });
};

module.exports = MainPage;