const mongoose = require("mongoose");

const Pro_manaSchema = new mongoose.Schema({
	title:{
		type:String,
		required:[true,'good'],
		minlength:[2,'title must be more 2 ']
	} ,
	price:{
		type:Number,
		required:[true,'good'],
	},
	discreption:{
		type:String,
		required:[true,'good'],
	}
});

const Pro_mana = mongoose.model("Pro_mana", Pro_manaSchema);

module.exports = Pro_mana;