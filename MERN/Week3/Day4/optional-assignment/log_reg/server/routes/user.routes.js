const  UserController= require('../controllers/user.controllers')
const {authenticate}=require('../config/jwt.config');


module.exports =(app)=>{
    app.post('/api/register',UserController.register)
    app.post('/api/login',UserController.login)
    app.post('/api/logout',UserController.logout)
}