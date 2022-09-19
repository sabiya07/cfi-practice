import express from "express";

const router = express.Router();

router.post("/", (req, res) => {
    try {
        res.status(200).json({ "success": "TASK POST is UP" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ "error": "Interval Server Error" });

    }
})

router.get("/tasks", (req, res) => {
    try {
        res.status(200).json({ "success": "TASK GET is UP" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ "error": "Interval Server Error" });
    }
})

router.delete("/:task_id", (req, res) => {
    try {
        res.status(200).json({ "success": "TASK DELETE is UP" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ "error": "Interval Server Error" });

    }
})

export default router;