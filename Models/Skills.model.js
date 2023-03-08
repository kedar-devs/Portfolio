const mongoose=require('mongoose')
const Schema=mongoose.Schema
const SkillSchema=Schema({
    UserId:{type:mongoose.Schema.Types.ObjectId,required:true},
    Skill:{type:String,required:true},
    Experience:{type:String,required:true},
})
const Skill=mongoose.model('Skills',SkillSchema)
module.exports=Skill