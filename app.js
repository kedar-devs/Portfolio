const express=require('express')
const cors=require('cors')
const fileupload=require('express-fileupload')
const app=express()
app.use(cors())
app.use(express.json())
app.use(fileupload())
module.exports = app;
