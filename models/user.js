const mongoose = require("mongoose");

const userschema = new mongoose.Schema({
    fullname:String,
    password:String,
    email:String,
    phone_no:String,
    address:[String],
    timestamp:{type: Number,default:Date.now()},
    saved_item_count:{type: Number,default:0},
    img_url:String,
    img_id:String,
    is_deleted:{type: Boolean,default:false}
    }, {collection: 'user'});

    const model = mongoose.model('user',userschema);
    module.exports = model;


