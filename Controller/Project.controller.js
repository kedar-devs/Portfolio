const Project=require('./../Models/Project.model')
const User=require('./../Models/User.model')
exports.AddProject=async(req,res)=>{
    try{
        const {token}=req.params
        const FoundUser=await User.findOne({accessToken:token})
        if(FoundUser){
            const {ProjectName,Description,StartDate,EndDate,ProjectUrl,CodeUrl}=req.body
            const project={
                UserId:FoundUser._id,
                ProjectName,
                Description,
                StartDate,
                EndDate,
                ProjectUrl,
                CodeUrl
            }
            const NewProject=new Project(project)
            NewProject.save()
            .then((response) => {
              return res.status(200).send({message:'Project Added succesfully'});
            })
            .catch((err) => {
              console.log(err);
              return res.status(400).send({ message: err });
            });
        }
        else{
            return res.status(400).send({message:'No user Found'})
        }
    }catch(err){
        console.log(err)
        return res.status(400).send({message:err})
    }
}
exports.getAllProjects=async(req,res)=>{
    try{
        const {token}=req.params
        const FoundUser=await User.findOne({accessToken:token})
        if(FoundUser){
            const FoundProject=await Project.find({UserId:FoundUser._id})
            if(FoundProject){
                return res.status(200).send(FoundProject)
            }else{
                return res.status(400).send({message:'No User Found'})
            }
        }

    }catch(err){
        console.log(err)
        return res.status(400).send({message:err})
    }
}
exports.getOneProject=async(req,res)=>{
    try{
        const {id}=req.params
        const FoundProject=await Project.findOne({_id:id})
        if(FoundProject){
            return res.status(200).send(FoundProject)
        }else{
            return res.status(400).send({message:'No User Found'})
        }
    }catch(err){
        console.log(err)
        return res.status(400).send({message:err})  
    }
}