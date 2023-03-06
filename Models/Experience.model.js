const mongoose=require('mongoose')
const Schema=mongoose.Schema
const ExperienceSchema=Schema({
    CompanyName:{type:String,required:true},
    Location:{type:String,required:true},
    StartDate:{type:Date,required:true},
    EndDate:{type:Date},
    CurrEmp:{type:Boolean},
    JobDescription:{type:String,required:true},
    Role:{type:String,required:true},
    JobType:{type:String,required:true},
    IndustryType:{type:String,required:true},
    Skills:{type:[String],required:true}
})
const Experience=mongoose.model('Experience',ExperienceSchema)
module.exports=Experience