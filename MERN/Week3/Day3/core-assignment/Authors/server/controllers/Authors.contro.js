const Authors = require('../models/Authors.model');


module.exports.AddAuthor =(req,res)=>{
    Authors.create(req.body)
           .then(author=>res.json(author))
           .catch((err)=>res.state(400).json(err))
};
module.exports.AllAuthor =(req,res)=>{
    Authors.find()
           .then(author=>res.json(author))
           .catch(err=>res.state(400).json(err))
};

module.exports.OneAthor =(req,res)=>{
    Authors.findOne( {_id: req.params.id} )
           .then((author)=>res.json(author))
           .catch((err)=>res.state(400).json(err))
};

module.exports.updateAuthor =(req,res)=>{
    Authors.findByIdAndUpdate(req.params.id,req.body,{new:true,runValidators:true})
           .then((author)=>res.json(author))
           .catch((err)=>res.state(400).json(err))
};
module.exports.deletAuthor =(req,res)=>{
    Authors.findByIdAndDelete(req.params.id)
           .then((author)=>res.json(author))
        .catch((err)=>res.state(400).json(err))
}

// *********************************BOOKS**********************
module.exports.addBook =(req,res)=>{
    Authors.findByIdAndUpdate(
        req.params.id,
        {$push:{books:req.body}},
        {new:true,runValidators:true})
    .then((author)=>res.json({author}))
    .catch((err)=>res.state(400).json(err))
}
// module.exports.delBook =(req,res)=>{
//     Authors.findByIdAndDelete(req.params.id,{$pop:{books:res.body}})
//             .then((author)=>res.json({author}))
//             .catch((err)=>res.state(400).json(err))
// }