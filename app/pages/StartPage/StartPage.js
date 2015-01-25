var path = require('path');

var MainPage = function(options){
    for(var name in options){
        this[name] = options[name];
        delete options[name];
    }
    
    this.app.get('/', this.init); // max
};
MainPage.prototype.init = function (req, res) {
    console.log('dirname' + __dirname + '/template.html');
};

module.exports = MainPage;