const mongoose = require("mongoose");

const ProSchema = new mongoose.Schema({
    title :{
        type:String,
        require:[true,'don t find'],
        minlength:[3,'{PATH} must be more than 3 chars']
    },
    price:{
        type:Number,
        require:[true,'don t find num '],
        
    },
    description :{
        type:String,
        require:[true,'don t find'],
        minlength:[3,'{PATH} must be more than 3 chars']
    },
    
},{timestamps:true})
const Project= mongoose.model('proj',ProSchema)
module.exports = Project