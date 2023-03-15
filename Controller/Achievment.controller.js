const Achievment=require('./../Models/Achievment.model')
const User=require('./../Models/User.model')
const streamifier=require('./../Helper/streamifier')
exports.AddAchievment=async(req,res)=>{
    try{
    const {token}=req.params
    const FoundUser=await User.findOne({accessToken:token})
    if(FoundUser){
    const {Title,IssuedBy,Description}=req.body
    const file=req.files.file
    const link=await streamifier.UploadImage(file)
 
    const achievment={
        UserId:FoundUser._id,
        Title,
        IssuedBy,
        Description,
        Link:link.url
    }
    const NewAchievment=new Achievment(achievment)
    NewAchievment.save()
    .then((response) => {
      return res.status(200).send({message:'Achievment Added succesfully'});
    })
    .catch((err) => {
      console.log(err);
      return res.status(400).send({ message: err });
    });
}else{
    return res.status(404).send({message:'No User Found'})
}
    }catch(err){
        console.log(err)
        return res.status(500).send(err)
    }
}
exports.GetAllAchievment=async(req,res)=>{
    try{
        const {token}=req.params
        const FoundUser=await User.findOne({accessToken:token})
        if(FoundUser){
            const FoundAchievment=await Achievment.find({UserId:FoundUser._id})
            if(FoundAchievment){
                return res.status(200).send(FoundAchievment)
            }
            else{
                return res.status(404).send({message:'No Achievment Found'})
            }
        }else{
            return res.status(404).send({message:'No User Found'})
        }

    }catch(err){
        console.log(err)
        return res.status(500).send(err)
    }

}
exports.GetOneAchievment=async(req,res)=>{
    try{

        const {id}=req.params
        const FoundAchievment=await Achievment.findOne({_id:id})
        if(FoundAchievment){
            return res.status(200).send(FoundAchievment)
        }
        else{
            return res.status(404).send({message:'No Achievment Found'})
        }
    }catch(err){
        console.log(err)
        return res.status(500).send(err)
    }
}
