const User=require('./../Models/User.model')
var jwt = require('jsonwebtoken');
var bcrypt = require('bcryptjs');
var salt = bcrypt.genSaltSync(10);
var {ObjectId} =require('mongoose')
exports.RegisterUser=async(req,res)=>{
    try{
        const {name,email,password,about,description}=req.body
        const FoundUser=await User.findOne({email})
        if(FoundUser){
            return res.status(400).send({message:'User already exists'})
        }
        const user={
            name:name,
            email:email,
            about:about,
            description:description,
            password:password,
            accessToken:'',
            resetToken:''
        }
        let payLoad1={subject:email}
        let payLoad2={subject: new ObjectId()}
        user.accessToken=await jwt.sign(payLoad1,process.env.SECRET_KEY)
        user.resetToken=await jwt.sign(payLoad2,process.env.SECRET_KEY) 
        user.password=await bcrypt.hashSync(user.password,salt)
        const NewUser=new User(user)
        NewUser.save((err,response)=>{
            if(err){
                console.log(err)
                return res.status(400).send({message:err})
            }
            return res.status(200).send({token:response.accessToken})
        })

    }catch(err){
        console.log(err)
        return res.status(500).send(err)
    }
}
exports.LoginUser=async(req,res)=>{
    try{
    const {email,password}=req.body
    const FoundUser=await User.findOne({email})
    if(FoundUser){
        let result=await bcrypt.compareSync(password,FoundUser.password)
        if(result){
            let payLoad1={subject:email}
            FoundUser.accessToken=await jwt.sign(payLoad1,process.env.SECRET_KEY)
            FoundUser.save((err,user)=>{
                if(err){
                    console.log(err)
                    return res.status(400).send({message:err}) 
                }
                return res.status(200).send({token:user.accessToken})
            })
        }
    }
}catch(err){
    console.log(err)
    return res.status(500).send(err)
}
}
exports.getUser=async(req,res)=>{
try{
    const {token}=req.params
    const FoundUser=await User.findOne({accessToken:Token})
    if(FoundUser){
        return res.status(200).send(FoundUser)
    }
    else{
        return res.status(400).send({message:'No User Found'})
    }
}catch(err){
    console.log(err)
    return res.status(500).send(err)
}
}
exports.deleteUser=async(req,res)=>{
    try{
    const {token}=req.params
    const FoundUser=await User.findOneAndDelete({accessToken:Token})
    if(FoundUser){
        return res.status(200).send(FoundUser)
    }
    else{
        return res.status(400).send({message:'No User Found'})
    }

    }catch(err){
        console.log(err)
        return res.status(500).send(err)
    }
}
