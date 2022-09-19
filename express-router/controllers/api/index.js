import express from "express";
import { loginValidation,registerValidation, errorMiddleware } from "../../middleware/validation/index.js"

const router = express.Router();



/*
METHOD : POST


PUBLIC
API Endpoint : /api/login
Body : 

email
password 
*/

router.post("/login", loginValidation(), errorMiddleware, (req, res) => {
    try {
        res.status(200).json({ "success": "Router is UP" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ "error": "Interval Server Error" });

    }
})

router.post("/signup", registerValidation(), errorMiddleware, (req, res) => {
    try {
        res.status(200).json({ "success": "Router is UP" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ "error": "Interval Server Error" });

    }
})

router.get("/", (req, res) => {
    try {
        res.status(200).json({ "success": "Router GET is UP" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ "error": "Interval Server Error" });

    }
})


export default router;