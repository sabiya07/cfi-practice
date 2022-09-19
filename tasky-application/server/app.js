import express from "express"
import fs from "fs/promises"
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
import makeid from "./utils/randomstring.js"
import { scheduleJob,cancelJob, scheduledJobs } from "node-schedule"

const app = express()
const port = 5000
// JSON Body Parser
app.use(express.json())
app.get("/", (req, res) => {
    res.status(200).json({ success: "Welcome to the TAsky" })
})
app.post("/register", (req, res) => {
    res.status(200).json({ success: "Welcome to the Tasky from register" })
})
app.post("/api/signup", async (req, res) => {
    try {
        let { firstname, lastname, password, password2, address, phone, email } =
            req.body
        // let body =req.body
        // basic Validations
        if (!email || !firstname || !lastname || !address || !phone || !address) {
            return res.status(400).json({ error: "some fields are missing" })
        }
        if (password !== password2) {
            return res.status(400).json({ error: "Password does not match" })
        }
        // Check duplication of email and mobile
        let fileData = await fs.readFile("data.json")
        fileData = JSON.parse(fileData)
        // console.log(email)
        let emailFound = fileData.find((ele) => ele.email == email)
        if (emailFound) {
            return res
                .status(409)
                .json({ error: "User Email Already Registered.Please Login" })
        }
        let phoneFound = fileData.find((ele) => ele.phone == phone)
        if (phoneFound) {
            return res
                .status(409)
                .json({ error: "User phone Already Registered.Please Login" })
        }
        password = await bcrypt.hash(password, 12)
        // Generate a 12 digit random string for user_id
        let user_id = makeid(16)
        let userData = {
            user_id,
            firstname,
            lastname,
            password,
            address,
            phone,
            email,
        }
        userData.tasks = []
        // userData.firstname = firstname
        fileData.push(userData)
        await fs.writeFile("data.json", JSON.stringify(fileData))
        res.status(200).json({ success: "Welcome you are in a signup route" })
    } catch (error) {
        console.error(error)
        res.status(500).json({ error: "Internal Server Error" })
    }
})

/*
METHOD : POST
PUBLIC
API Endpoint : /api/login
Body : 
email
password 
*/

app.post("/api/login", async (req, res) => {
    try {
        let { email, password } = req.body
        if (!email || !password) {
            return res.status(400).json({ error: "some fields are missing" })
        }
        let fileData = await fs.readFile("data.json")
        fileData = JSON.parse(fileData)
        let userFound = fileData.find((ele) => ele.email == email)
        if (!userFound) {
            return res.status(401).json({ error: "Invalid Credentials" })
        }
        // console.log(userFound)
        let matchPassword = await bcrypt.compare(password, userFound.password)
        if (!matchPassword) {
            return res.status(401).json({ error: "Invalid Credentials" })
        }
        let payload = {
            id: userFound.user_id,
            role: "user",
        }
        let privatekey = "codeforindia"
        const token = jwt.sign(payload, privatekey, { expiresIn: "1h" })
        console.log(token)
        //GENERATE A TOKEN
        res.status(200).json({ success: "Login is Successful", token })
    } catch (error) {
        console.error(error)
        res.status(500).json({ error: "Internal Server Error" })
    }
})

/*
METHOD : POST
PRIVATE
auth-token
API Endpoint : /api/task
Body : 
task_name
deadline
*/


app.post("/api/task", async (req, res) => {
    try {
        let token = req.headers["auth-token"];
        if (!token) {
            return res.status(401).json({ error: "unauthorised access" })
        }

        const payload = jwt.verify(token, "codeforindia");
        if (!payload) {
            return res.status(401).json({ error: "unauthorised access" })
        }
        // console.log(req.headers)
        // console.log(req.headers["auth-token"])

        let { task_name, deadline } = req.body
        if (!task_name || !deadline) {
            return res.status(400).json({ error: "some fields are missing" })
        }

        //deadline cannot be less than 30 mins and more than 30 days
        
        // console.log(task_name, deadline);

        let utc_deadline = new Date(deadline);
        let present_time = new Date();
        
        if (utc_deadline == "invalid date" || (utc_deadline < present_time)) {
            return res.status(401).json({ error: "invalid date entered" })
        }
        // console.log(utc_deadline);

        //Check Validation for 30 mins and 30 Days
        let difference = utc_deadline - present_time;
        // console.log(utc_deadline);
        // console.log(present_time);
        // console.log(difference);


        //Difference in Minutes
        let mins = difference / (1000 * 60)
        // console.log(mins);

        let days = difference / (1000 * 60 * 60 * 24);
        // console.log(days);

        //Not Less than 30 mins and Not more than 30 Days
        if (mins < 1|| days > 30) {
            return res.status(400).json({ error: "Invalid Date Entered, Deadline Should be More than 30 mins and Less than 30 Days" });
        }

        //Get Reminders
        let reminders = [];

        let reminder1 = new Date((+present_time) + (difference / 4));
        // console.log(reminder1);

        let reminder2 = new Date((+present_time) + (difference / 2));
        // console.log(reminder2);

        let reminder3 = new Date((+present_time) + (difference / (4 / 3)));
        // console.log(reminder3);

        reminders.push(reminder1, reminder2, reminder3, utc_deadline);
        console.log(reminders);


        let fileData = await fs.readFile("data.json");
        fileData = JSON.parse(fileData);

        let userFound = fileData.find((ele) => ele.user_id == payload.id)
        let  task_id= makeid(14)
        let task_data = {
            task_id,
            task_name,
            deadline: utc_deadline,
            isCompleted: false,
            reminders
        }

        task_data.reminders.forEach((ele, i) => {
            // console.log(ele);
            scheduleJob(`${task_id}_${i}`, ele, () => {
                console.log(`hey ${userFound.firstname},this is your ${i+1} reminder for your task : ${task_data.task_name}`);
                console.log(new Date());
            })
            // console.log(i);
        })
        console.log(scheduledJobs);

        userFound.tasks.push(task_data);
        // console.log(task_data)
        await fs.writeFile("data.json", JSON.stringify(fileData))
        res.status(200).json({ error: "task is successful" })
    }
    catch (error) {
        console.log(error);
        res.status(500).json({ error: "internal server error" })
    }
})

/*
End Point : /api/tasks
Method : GET
PRIVATE
*/
/*
End Point : /api/task/:task_id
Method : GET
PRIVATE
*/
/*
End Point : /api/task/:task_id
Method : DELETE
PRIVATE
Use : To Delete the Task from a Given ID
*/
app.delete("/api/task/:task_id", async (req, res) => {
    try {
        // console.log(req.params);
        let task_id = req.params.task_id;
        console.log(task_id);
        //Check for Authorisation
        let token = req.headers["auth-token"];
        if (!token) {
            return res.status(401).json({ error: "Unauthorised Access" });
        }
        const payload = jwt.verify(token, "codeforindia");
        // console.log(payload);
        if (!payload) {
            return res.status(401).json({ error: "Unauthorised Access" });
        }
        //Reading File Data
        let fileData = await fs.readFile("data.json");
        fileData = JSON.parse(fileData);
        let userFound = fileData.find((ele) => ele.user_id == payload.user_id)
        // console.log(userFound);
        //Find Index of Given Task
        let taskIndex = userFound.tasks.findIndex((ele) => ele.task_id == task_id);
        // console.log(taskIndex);
        if (taskIndex == -1) {
            return res.status(404).json({ error: "Task Not Found" });
        }
        //Delete Element with Given Index from an Array
        userFound.tasks.splice(taskIndex, 1)
        // console.log(userFound.tasks);
        // console.log(fileData);
        await fs.writeFile("data.json", JSON.stringify(fileData));
        res.status(200).json({ success: "Task Was Deleted Successfully" });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: "Internal Server Error" });
    }
})
app.get("/check", (req, res) => {
    try {
        let date = new Date("Thu Sep 15 2022 16:29:50 GMT+0530 (India Standard Time)")
        console.log(new Date());
        console.log(date);
        scheduleJob("jobid_1", date, () => {
            console.log(randomString(100))
        });
        console.log(scheduledJobs);
        // cancelJob("jobid_1");
        console.log(scheduledJobs);
        res.status(200).json({ success: "Checking " });
    } catch (error) {
        console.error(error)
        res.status(500).json({ error: "Internal Server Error " });
    }
})

app.listen(port, () => {
    console.log("Server Started at Port ", port)
})










