const ProjectController=require('./../Controller/Project.controller')
const routes=require('express').Router()
routes.post('/AddProject/:token',ProjectController.AddProject)
routes.get('/GetAllProject/:token',ProjectController.getAllProjects)
routes.get('/GetOneProject/:id',ProjectController.getOneProject)
module.exports=routes