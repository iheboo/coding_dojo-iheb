const jwt = require("jsonwebtoken");
secret ="thisdon'tyokey";


module.exports.secret =secret;
module.exports.authenticate = (req,res,next)=>{
    console.log("this is cookie is:",req.cookies);
    jwt.verify(req.cookies.userToken,secret,(err)=>{
        if (err){
            console.log("this is err:",err);
            res.status(401).json({verified:false})
        }
        else{
            console.log("SUCCESS")
            next();
        }
    })
}