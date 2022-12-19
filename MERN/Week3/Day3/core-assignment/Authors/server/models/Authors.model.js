const mongoose = require("mongoose");

const AuthSchema = new mongoose.Schema({
    name :{
        type:String,
        require:[true,'require a name'],
        minlength:[3,'{PATH} must be more than 3 chars']
    },
    books:[
        {
            title:{
                type:String,
                required:[true,'require a book']
            },
            numberOfPages:{
                type:Number,
                require:true
            },
        }
    ]
    
},{timestamps:true})
const Authors= mongoose.model('authors',AuthSchema)
module.exports = Authors