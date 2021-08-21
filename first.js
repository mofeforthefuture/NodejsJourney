var http = require('http');
var dt = require('./myFirstModule')

http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end('Hello Mofe let\'s start learning node js, ok  this is cool')
    res.write("The date and time are currently: " + dt.myDateTime())
}).listen(3000)

//To include a module, use the ########require()######## function with the name of the module:
// we  have in built modules and we can also create new modules




//creating my modules
// Create a module that returns the current date and time:
exports.myDateTime = function () {
    return Date();
};