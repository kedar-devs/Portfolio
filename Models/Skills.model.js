const mongoose=require('mongoose')
const Schema=mongoose.Schema
const SkillSchema=Schema({
    Skill:{type:String,required:true},
    Project:{type:[mongoose.Schema.Types.ObjectId]}
})
const Skill=mongoose.model('Skills',SkillSchema)
module.exports=Skill