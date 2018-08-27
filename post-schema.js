const mongoose = require("mongoose");
const Schema = mongoose.Schema;


var yeniMesaj = new Schema({
    title: String,
    date: String,
    editor_content: String
});

const Mesaj = mongoose.model("mesaj", yeniMesaj);



module.exports = Mesaj;
