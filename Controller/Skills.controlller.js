const User = require('../Models/User.model')
const Skills=require('./../Models/Skills.model')
exports.AddSkill=async(req,res)=>{
    try{
        const {token}=req.params
        const FoundUser=await Skill.findOne({accessToken:token})
        if(FoundUser){
            const {Skill,Experience}=req.body
            const skill={
                UserId:FoundUser._id,
                Skill,
                Experience
            }
            const NewUser=new Skills(skill)
            NewUser.save((err,response)=>{
                if(err){
                    return res.status(400).send({message:err})
                }
                return res.status(200).send('New Skills Added')
            })
        }else{
            return res.status(400).send({message:'No user Found'})
        }
    }catch(err){
        console.log(err)
        return res.status(500).send(err)
    }
}
exports.getAllSkills=async(req,res)=>{
    try{
    const {token}=req.params
    const FoundUser=await User.findOne({accessToken:token})
    if(FoundUser){
        const FoundSkills=await Skills.find({UserId:FoundUser._id})
        if(FoundSkills){
            return res.status(200).send(FoundSkills)
        }else{
            return res.status(404).send({message:'No skills found'})
        }
    }else{
            return res.status(400).send({message:'No user Found'})
    }
}catch(err){
    console.log(err)
    return res.status(500).send(err)
}
}
exports.getOneSkill=async(req,res)=>
{
    try{
        const {id}=req.params
        const FoundSkills=await Skills.findOne({_id:id})
        if(FoundSkills){
            return res.status(200).send(FoundSkills)
        }else{
            return res.status(404).send({message:'No skills found'})
        }
    }catch(err){
        console.log(err)
        return res.status(500).send(err)
    }
}