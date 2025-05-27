const { config } = require('dotenv')
const express=require('express')
const mongoose=require('mongoose')
const patients=require('./model/patient')
const docter=require('./model/docter')
const app=express();
app.use(config())
app.use(express.json())
app.connect(process.env.MONGO_URI)
.then(
    res.status(200).json("connected")

).catch(
    res.status(401).json(error)
)

app.get('/api/patients',(req,res)=>{
   try{ const patients= req.body
    patients=new patients
    await.save()
    patients.find()
}catch{
    console.log(error);
    }
})

app.post('/api/patients',(req,res)=>{
   try{
    const patients=req.body
    patients=new patients.save()
   }catch{
       console.log(error);
       
   }
})
app.put('/api/patient/:id/doctors',(req,res)=>{
    try{
        {"name","age","ailment","doctor"}=req.params.id
        patients=await.findByIdandUpdate()
    }catch{
       console.log(error)
    }
})

app.delete('api/patients/:id',(req,res)=>{
    try{
        {"name","age","ailment","doctor"}=await req.params.id
        patients=await.findByIdandDelete(id)
    }catch{
       console.log(error)
    }
})


app.listen(5000,(req,res)=>{
    console.log('server is running ')
})