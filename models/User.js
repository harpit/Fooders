const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    username : {type : String , required: true},
    email : {type : String , required: true , unique : true},
    otp : {type : String , required: false , default : "none"},
    fcm : {type : String , required: false , default : "none"},
    password : {type : String , required: true},
    verification : {type : Boolean , default: false},
    phone : {type : String , default : "0123456789"},
    phoneVerification : {type : Boolean , default : false},
    address : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "Address",
        required : false
    },
    userType : {type : String , required : true , default : "Client" , enum : ['Client', 'Admin' , 'Vendor' , 'Driver']},
    profile : {type : String , default : 'https://i.pinimg.com/236x/83/bc/8b/83bc8b88cf6bc4b4e04d153a418cde62.jpg'}
}, {timestamps : true}); 

module.exports = mongoose.model('User' , UserSchema);