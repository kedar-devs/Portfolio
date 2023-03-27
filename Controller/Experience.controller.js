const Experience=require('./../Models/Experience.model')
const User=require('./../Models/User.model')
const streamer=require('./../Helper/streamifier')
exports.AddExperience=async(req,res)=>{
    try{
    const {token}=req.params
    const FoundUser=await User.findOne({accessToken:token})
    const link=streamer.UploadImage(req.file.CompanyLogo)
    if(FoundUser){
        const {CompanyName,Location,StartDate,EndDate,CurrEmp,JobDescription,Role,JobType,IndustryType,Skills}=req.body
        const experience={
            CompanyName,
            Location,
            StartDate,
            companyLogo:link.url,
            EndDate,
            CurrEmp,
            JobDescription,
            Role,
            JobType,
            IndustryType,
            Skills,
            UserId:FoundUser._id
        }
        const NewExperience=new Experience(experience)
        NewExperience.save()
        .then((response) => {
          return res.status(200).send({message:'Experience Added succesfully'});
        })
        .catch((err) => {
          console.log(err);
          return res.status(400).send({ message: err });
        });
        //const experience

    }else{
        return res.status(400).send({message:'No user found'})
    }
}catch(err){
    console.log(err)
    return res.status(400).send({message:err})
}
}
exports.GetAllExperience=async(req,res)=>{
    try{
        const {token}=req.params
        const FoundUser=await User.findOne({accessToken:token})
        if(FoundUser){
            const FoundExperience=await Experience.find({UserId:FoundUser._id})
            if(FoundExperience){
                return res.status(200).send(FoundExperience)
            }
            else{
                return res.status(400).send({message:'No project found'})
            }
        }else{
            return res.status(400).send({message:'No user found'})
        }

    }catch(err){
        console.log(err)
        return res.status(400).send({message:err}) 
    }
}
exports.GetOneExperience=async(req,res)=>{
    try{
        const {id}=req.params
        const FoundExperience=await Experience.findOne({_id:id})
        if(FoundExperience){
            return res.status(200).send(FoundExperience)
        }
        else{
            return res.status(400).send({message:'No project found'})
        }
    }catch(err){
        console.log(err)
        return res.status(400).send({message:err}) 
    }
}