import express from "express";
const app=express();
const port=8000;

app.use(express.json())

app.get("/",(req,res)=>{
    console.log("iam in express server");
    res.send("hii from express server")
})
app.post("/sabiya/home",(req,res)=>{
    console.log(req.headers);
    console.log(req.query);
    console.log(req.params);
    console.log(req.method);
    console.log(req.url);
    console.log(req.body);
    res.send("hii from POST method")
})
app.use("/",(req,res)=>{
    console.log(req.method);
    res.send("welcome to express")
})
app.listen(port,()=>{
    console.log("server")
})
// import express from "express";

// //Instantiate Express 
// const app = express();

// //Allot Port Number
// const port = 8000;

// //Checks if the Body is Coming in Valid JSON Format
// app.use(express.json());


// //GET Method
// app.get("/", (req, res) => {
//     console.log("I am in Express Server");

//     //Send Response to the Server
//     // setTimeout(() => {
//     //     res.send("<h1>Hi From Express Server GET METHOD</h1>");
//     // }, 4000);
//     res.send("<h1>Hi From Express Server GET METHOD</h1>");


//     //Note you cannot have more than 1 Res.send 
// })

// //POST Method
// app.post("/home", (req, res) => {
//     res.send("I am coming from POST Method");
// })

// //Use - Works on all HTTP Req Methods
// app.use("/", (req, res) => {
//     console.log(req.method);
//     res.send("Welcome to Express")
// })