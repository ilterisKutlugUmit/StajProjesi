const express = require('express');
const router = express.Router();
var bodyParser = require("body-parser");
const Mesaj = require("../models/post-schema");
const mongoose = require("mongoose");
var mongodb = require('mongodb').MongoClient;
const json = require("json");



router.use(bodyParser.json());
var urlencodedParser = bodyParser.urlencoded({ extended: true });



router.get("/", function (req, res) {
    //get data from mongoDB and pass it to the view
    Mesaj.find({}, function (err, data) {
        //data = json.toString(data);
        if (err) throw err;
        //mesajların length'i 2
        res.render("index", { mesajlar: data });
    });
});


router.get('/post', function (req, res) {
    res.render('post')
});

router.get('/contact', function (req, res) {
    res.render('contact')
});

router.get('/about', function (req, res) {
    res.render('about')
});

router.get('/text-editor', function (req, res) {
    res.render('text-editor')
});

router.post("/text-editor", urlencodedParser, function (req, res) {
    var mesajım = new Mesaj(req.body);
    mesajım.save().then(function (mesajım){ 
        Mesaj.find({}, function (err, data) {
        //data = json.toString(data);
        if (err) throw err;
        res.render("successPost", { mesajlar: data });
    });
});
});

module.exports = router;
