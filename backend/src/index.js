import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import router from './router/index.js'
const app=express();
dotenv.config()
app.use(express.json())
app.use(cors())
app.use(router)
app.get('/',(req,res)=>{
    res.status(200).send("<h1>hello world</h1>")
})
app.listen(process.env.PORT,()=>{
    console.log("App is ready on 5000")
})