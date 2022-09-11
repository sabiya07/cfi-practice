import express from "express";

const app=express();

const port=8000;

//json body parser
app.use(express.json())

app.get("/",(req,res)=>{
    console.log("working")
    res.status(200).json({success:"welcome to the tasky application"})
})
/*
method:posyt
api endpoint:/api/register
body:
firstname:
lastname:
phone
email
password
password2
address
*/







  