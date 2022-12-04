const Jokes = require ("../models/jokes.model");

module.exports.findJokes=(req,res)=>{
    Jokes.find()
    .then ((alljokes)=>{
        res.json({jokes:alljokes})
    })
    .catch(err=>{
        res.json({msg:"no jokes at all  ",serverError:err})
    })
}
module.exports.findONEJokes=(req,res)=>{
    Jokes.find({_id:req.params._id})
    .then ((joke)=>{
        res.json({jokes:joke})
    })
    .catch(err=>{
        res.json({msg:"don't find one ",serverError:err})
    })
}

module.exports.createJokes = (req,res) =>{
    Jokes.create(req.body)
    .then(newJoke =>{
        res.json({ jokes:newJoke})
    })
    .catch(err =>res.json({msg:"no creation of joke ",error:err}))
}

module.exports.updateJokes = (req,res) =>{
    Jokes.updateOne({_id:req.params._id},res.body)
    .then(result =>{
        res.json({jokes:result})
    })
    .catch(err =>res.json({msg:"no update of joke ",error:err}))
}
module.exports.deleteJoke = (req,res) =>{
    Jokes.Remove ({_id:req.params._id})
    .then(result =>{
        res.json({result:result})
    })
    .catch(err =>res.json({msg:"don't delete of joke ",error:err}))
}