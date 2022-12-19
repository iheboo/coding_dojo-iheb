const Project = require ('../models/Pro.model')



module.exports =  {

   findALL: (req,res)=>{
        Project.find()
               .then(allpro => {res.json(allpro)})
               .catch(err => { res.json(err) })
            } ,
    findone: (req,res)=>{
        Project.findById(req.params.id)
            .then(onepro => {res.json(onepro)})
            .catch(err => { res.json(err) })
        } ,
    createpro: (req,res)=>{
        Project.create(req.body)
               .then(createproo => {res.json(createproo)})
               .catch(err => { res.json(err) })
            } ,
    updatepro: (req,res)=>{
        Project.findByIdAndUpdate(req.params.id,req.body,{new:true})
            .then(uppro => {res.json(uppro)})
            .catch(err => { res.json(err) })
        } ,
    deletepro: (req,res)=>{
            Project.findByIdAndDelete(req.params.id)
                   .then(result => {res.json(result)})
                   .catch(err => { res.json(err) })
                } ,


}

