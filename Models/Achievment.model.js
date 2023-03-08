const mongoose=require('mongoose')
const Schema=mongoose.Schema
const AchievmentSchema=Schema({
    UserId:{type:mongoose.Schema.Types.ObjectId,required:true},
    Title:{type:String,required:true},
    IssuedBy:{type:String,required:true},
    Link:{type:String,required:true},
    Description:{type:String,required:true}
})
const Achievment=mongoose.model('Achievment',AchievmentSchema)
module.exports=Achievment