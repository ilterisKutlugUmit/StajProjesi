const mongoose = require("mongoose");
const Schema = mongoose.Schema;


var yeniYorum = new Schema({
    comment_id : String,
    
    yorumYazarı:{
        type: String,
        default: "Anonim"
    },
    yorum : String
});

const Yorum = mongoose.model("yorum", yeniYorum);


module.exports = Yorum;
