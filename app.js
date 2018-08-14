const express = require("express");
const chalk = require('chalk');
const path = require('path');



const app = express();
const port = process.env.PORT || 3000;

app.use("/", require("./routes/api"));
app.engine('ejs', require('ejs').__express);
app.use(express.static(path.join(__dirname, 'views')));
//app.use(express.static("public"));

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

/*
app.use('/', (req, res, next) => {
    res.locals.year = new Date().getFullYear()
    next()
});
*/

app.get('/', function (req, res) {
    res.render('index')
});

app.get('/post', function (req, res) {
    res.render('post')
});

app.get('/contact', function (req, res) {
    res.render('contact')
});

app.get('/about', function (req, res) {
    res.render('about')
});



app.listen(port, function () {
    console.log('listening on port ' + chalk.blue(port));
  });