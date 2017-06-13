var express = require('express');
var app = express();

//your routes here
var root = process.cwd();
app.get('/login', function (req, res) {
    res.sendFile('html/login.html',{root});
});
app.get('/register', function (req, res) {
    res.sendFile('html/register.html',{root});
});
app.get('/home', function (req, res) {
    res.send("Welcome to home page! You may enter the required details..");
});
app.use(express.static('html'));
app.listen(8080, function () {
  console.log('Example app listening on port 8080!');
});
