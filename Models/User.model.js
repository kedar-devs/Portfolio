const mongoose=require('mongoose')
const Schema=mongoose.Schema
const UserSchema=Schema({
    name:{type:String,required:true},
    email:{type:String,required:true,unique:true},
    about:{type:String,required:true},
    description:{type:String,required:true},
    CurrentComp:{type:String,required:true},
    CurrentRole:{type:String,required:true},
    CurrentSkill:{type:String,require:true},
    password:{type:String,required:true},
    accessToken:{type:String,required:true},
    resetToken:{type:String,required:true}
})
const User=mongoose.model('User',UserSchema)
module.exports=User