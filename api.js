const express = require('express');
const router = express.Router();
var bodyParser = require("body-parser");
const Mesaj = require("../models/post-schema");
const mongoose = require("mongoose");
var mongodb = require('mongodb').MongoClient;
const json = require("json");



router.use(bodyParser.json());
var urlencodedParser = bodyParser.urlencoded({ extended: true });


/*
router.get("/",function(req, res){
    var getIndex = function (req, res) {

        var url =

            'mongodb://localhost:27017/blogDB';

            mongodb.connect(url, function (err, db) {

            var collection = db.getCollection('mesajs');

            collection.find({

                // get all

            }).toArray(function (err, results) {

                res.render('index', {

                    mesajlar: results
    
                });
            });
        });
    };
});
*/

router.get("/", function (req, res) {
    //get data from mongoDB and pass it to the view
    Mesaj.find({}, function (err, data) {
        //data = json.toString(data);
        if (err) throw err;
        //mesajların length'i 2
        res.render("index", { mesajlar: data });
    });
});

/*
router.get("/post/:id", function (req, res) {
    //get data from mongoDB
    Mesaj.find({}, function (err, data) {
        //data = json.toString(data);
        if (err) throw err;
        //mesajların length'i 2
        res.render("post", { mesajlar:data });
    });
});
*/





/*
router.get('/', function (req, res) {
    //db.getCollection('mesajs').find({}) = mesajs;
    res.render('index');

});
*/


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
    mesajım.save().then(function (mesajım) {
        res.send(mesajım.title + " Başlıklı yazı" + mesajım.date + " tarihiyle" + mesajım.editor_content + " içeriğiyle Başarıyla Paylaşıldı");
    });
});


module.exports = router;
