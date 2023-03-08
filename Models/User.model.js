const mongoose=require('mongoose')
const Schema=mongoose.Schema
const UserSchema=Schema({
    name:{type:String,required:true},
    email:{type:String,required:true,unique:true},
    about:{type:String,required:true},
    description:{type:String,required:true},
    password:{type:String,required:true},
    accessToken:{type:String,required:true},
    resetToken:{type:String,required:true}
})
const User=mongoose.model('User',UserSchema)
module.exports=User