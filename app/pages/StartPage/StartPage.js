var MainPage = function(options){
    for(var name in options){
        this[name] = options[name];
        delete options[name];
    }
    this.app.get('/', this.init);
};
MainPage.prototype.init = function (req, res) {
    res.send('Hello World!');
};

module.exports = MainPage;