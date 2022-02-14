const mongoose = require('mongoose')

const signUpTemplate = new mongoose.Schema({

    FirstName:{
        type: String,
        required: true
    },
    LastName:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    DoB:{
        type: String,
        required: true
    },
    date:{
        type: Date,
        default: Date.now
    }


})
module.exports = mongoose.model('mytable',signUpTemplate)