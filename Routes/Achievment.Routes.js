const AchievmentController=require('./../Controller/Achievment.controller')
const routes=require('express').Router()
routes.post('/AddAchievment/:token',AchievmentController.AddAchievment)
routes.get('/GetAllAchievment/:token',AchievmentController.GetAllAchievment)
routes.get('/GetOneAchievment/:id',AchievmentController.GetOneAchievment)
module.exports=routes