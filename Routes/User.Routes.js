const UserController=require('./../Controller/User.controller')
const routes=require('express').Router()
routes.post('/AddUser',UserController.RegisterUser)
routes.get('/GetUser/:token',UserController.getUser)
routes.delete('/DeleteUser/:token',UserController.deleteUser)
routes.post('/Login',UserController.LoginUser)
module.exports=routes
