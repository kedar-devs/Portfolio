const ExperienceController=require('./../Controller/Experience.controller')
const routes=require('express').Router()
routes.post('/AddExperience/:token',ExperienceController.AddExperience)
routes.get('/GetAllExperience/:token',ExperienceController.GetAllExperience)
routes.get('/GetOneExperience/:id',ExperienceController.GetOneExperience)
module.exports=routes