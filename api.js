const express = require('express');
const router = express.Router();
var bodyParser = require("body-parser");
const Mesaj = require("../models/post-schema");
const Yorum = require("../models/comment-schema");
const mongoose = require("mongoose");
var mongodb = require('mongodb').MongoClient;
var db = require('mongodb');
const json = require("json");
var objectId = require('mongodb').ObjectID;
const app = express();


router.use(bodyParser.json());
var urlencodedParser = bodyParser.urlencoded({ extended: true });





router.get("/", function (req, res) {
    //get data from mongoDB and pass it to the view
    Mesaj.find({}, function (err, data) {

        if (err) throw err;

        res.render("index", { results: data });
    });
});



router.get("/post/:id", function (req, res) {
    Mesaj.findById(req.params.id, function (err, data) {

        if (err) throw err;
        res.render("post", { resultPost : data });

    });
    
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
    mesajım.save().then(function (mesajım) {
        Mesaj.find({}, function (err, data) {

            if (err) throw err;
            res.render("successPost", { mesajlar: data });
        });
    });
});


router.post("/post/:id", urlencodedParser, function (req, res) {
    var yorumum = new Yorum(req.body);
    yorumum.save().then(function () {

        Mesaj.findById(req.params.id, function (err, data) {

            if (err) throw err;
            res.render("post", { resultPost : data });
        });
        
        

    });
});
module.exports = router;
