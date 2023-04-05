const express=require("express")
const cors=require('cors')
const app=express()
app.use(cors())
app.get('/data',(req,res)=>{
    res.send({message:"req from data page"})
    console.log("data page")
})
const data1=require('./page/data')
app.use('/',data1)



app.listen(8080,()=>{
    console.log("server running at port 8080")
})