const express=require('express')
const app=express()
const mongoose=require('mongoose')

try{
    mongoose.connect('mongodb://127.0.0.1:27017/lsm')
    console.log('Database connected')
}
catch(e){
    console.log('DB error')
    console.log(e.message)
}
app.listen(8080,async()=>{
    console.log('Server started')
})