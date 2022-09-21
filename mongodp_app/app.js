import express from "express";

const app=express();

import "./dbconnect.js"

let port=5500

app.get("/",(req,res)=>{
    res.send("server is up")
    
})

app.listen(port,(req,res)=>{
    console.log("server started at port",port)
})