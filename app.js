const express = require("express");
const chalk = require('chalk');
const path = require('path');
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const mongodb = require('mongodb').MongoClient;
var objectId = require('mongodb').ObjectID;
const paginate = require('express-paginate');



const app = express();
const port = process.env.PORT || 3000;



//mongoDB ye bağlanma
mongoose.connect("mongodb://localhost/blogDB");
mongoose.Promise = global.Promise;

app.use("/", require("./routes/api"));
app.engine('ejs', require('ejs').__express);
app.use(express.static(path.join(__dirname, 'views')));
//app.use(express.static("public"));

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');




app.listen(port, function () {
    console.log('listening on port ' + chalk.blue(port));
  });