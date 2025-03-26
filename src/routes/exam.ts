import express from "express";

const router = express.Router();

const exams = [
  { id: 1, name: "Math Exam", date: "2025-05-10" },
  { id: 2, name: "Science Exam", date: "2025-06-15" }
];

// GET /exams - Returns a hardcoded list of exams
router.get("/exams", (req, res) => {
  res.json(exams);
});

export default router;
