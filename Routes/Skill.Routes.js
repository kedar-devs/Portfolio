const SkillController=require('./../Controller/Skills.controlller')
const routes=require('express').Router()
routes.post('/AddSkills/:token',SkillController.AddSkill)
routes.get('/GetAllSkills/:token',SkillController.getAllSkills)
routes.get('/GetOneSkills/:id',SkillController.getOneSkill)
module.exports=routes
