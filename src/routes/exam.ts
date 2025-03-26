import express, { Request, Response } from "express";

const router = express.Router();

const exams: { id: number; name: string; date: string }[] = []; // ✅ Define an array to store exams

router.post("/exams", (req: Request, res: Response) => {
    const { id, name, date } = req.body;

    if (!id || !name || !date) {
        return res.status(400).json({ message: "Missing exam details" });
    }

    const exam = { id, name, date };
    exams.push(exam);

    res.status(201).json({ message: "Exam added successfully", exams });
});

export default router; // ✅ Export the router properly
