const mongoose = require('mongoose')

const aS = new mongoose.Schema({
    name:{
        type: String,
        required: true,
    },
    tech:{
        type: String,
        required:true,
    },
    sub:{
        type: String,
        required: true,
    },
})
module.exports = mongoose.model('Alien',aS)