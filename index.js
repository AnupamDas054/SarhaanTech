const express=require('express');

const path=require('path')

const app=express();

app.use(express.static(path.join(__dirname,'frontend')))

app.use('/',(req,res,next)=>{
    res.sendFile(path.join(__dirname,'frontend','index.html'))
})

app.listen(process.env.PORT || 3000)