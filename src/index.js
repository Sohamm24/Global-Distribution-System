const express=require('express')
const {PORT}=require('./config')
const apiRoutes=require('./routes') 

const app=express()

app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use('/api',apiRoutes)

app.listen(PORT,async ()=>{
    console.log(`Sever Running on port :${PORT}`) 
})