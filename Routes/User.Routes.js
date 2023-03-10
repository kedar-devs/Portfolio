const UserController=require('./../Controller/User.controller')
const routes=require('express').Router()
routes.post('/AddRegister',UserController.RegisterUser)
routes.get('/GetUser/:token',UserController.getUser)
routes.delete('/DeleteUser/:token',UserController.deleteUser)
routes.post('/LoginUser',UserController.LoginUser)
module.exports=routes
