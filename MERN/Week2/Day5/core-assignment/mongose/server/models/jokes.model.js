const mongoose =require("mongoose");

const jokesSchema = new mongoose.schema({
    setup:{
        type:String,
        required:[true,"cool one "]
    },
    punchline:{type:String},
    rank:{type: String}

})
const Jokes = mongoose.model("Jokes",jokesSchema);
module.exports =Jokes;