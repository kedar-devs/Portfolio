const mongoose=require('mongoose')
const Schema=mongoose.Schema
const AchievmentSchema=Schema({
    Title:{type:String,required:true},
    IssuedBy:{type:String,required:true},
    link:{type:String,required:true},
    Description:{type:String,required:true}
})
const Achievment=mongoose.model('Achievment',AchievmentSchema)
module.exports=Achievment