const express=require('express')
const cors=require('cors')
const fileupload=require('express-fileupload')
const AchievmentRoutes=require('./Routes/Achievment.Routes')
const ExperienceRoutes=require('./Routes/Experience.Routes')
const ProjectRoutes=require('./Routes/Project.Routes')
const SkillRoutes=require('./Routes/Skill.Routes')
const UserRoutes=require('./Routes/User.Routes')
const path=require('path')
const app=express()
app.use(cors())
app.use(express.json())
app.use(fileupload())
app.use('/Achievment',AchievmentRoutes)
app.use('/Experience',ExperienceRoutes)
app.use('/Project',ProjectRoutes)
app.use('/Skill',SkillRoutes)
app.use('/User',UserRoutes)


app.use(express.static(path.join(__dirname,"./client/build")))
app.get("*",function(_,res){
    res.sendFile(
        path.join(__dirname,"./client/build/index.html"),
        function(err){
            res.status(500).send(err)
        }
    )
})

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
})
module.exports = app;
