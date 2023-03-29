const mongoose=require('mongoose')
const Schema=mongoose.Schema
const ProjectSchema=Schema({
    UserId:{type:String,required:true},
    ProjectName:{type:String,required:true},
    Description:{type:String,required:true},
    StartDate:{type:Date},
    EndDate:{type:Date},
    ProjectUrl:{type:String,required:true},
    CodeUrl:{type:String,required:true},
    SkillsArray:{type:[String],required:true},
    ImageArray:{type:[String],required:true}
})
const Project=mongoose.model('Project',ProjectSchema)
module.exports=Project