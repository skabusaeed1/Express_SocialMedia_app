import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import dotenv from "dotenv";
import AuthRoute from "./Route/AuthRoute.js";
import UserRoutes from "./Route/UserRoutes.js";
import PostRoute from "./Route/PostRoute.js";

const app= express();
app.use(bodyParser.json({limit:"30mb",extended:true}));
app.use(bodyParser.urlencoded({limit:"30mb",extended:true}));
dotenv.config();

app.get("/",(req,res)=>{
    res,send("Welcome to HomePage")
})

mongoose.connect(process.env.MONGO_DB,{
    useNewUrlParser: true, useUnifiedTopology: true,
})
.then(()=>app.listen(process.env.PORT,()=>console.log(`listening on ${process.env.PORT}`)))
.catch((error)=>console.log(error))


app.use("/auth",AuthRoute)
app.use('/user',UserRoutes)
app.use('/post',PostRoute)


