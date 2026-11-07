const mongoose = require("mongoose")

const musicSchema = new mongoose.Schema({
    uri:{
        type:String,
        required:true
    },
    title:{
        type:String,
        required:true
    },
    artist:{
        type : mongoose.Schema.Types.ObjectId, //inorder to use populate and fetch all data of the artist in user end
        ref : 'user',
        required:true
        
    }
})

const musicModel = mongoose.model("music",musicSchema)

module.exports = musicModel