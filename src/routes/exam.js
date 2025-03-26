const express = require('express');
const router = express.Router();

// Sample Data
let exams = [
  { 
    id: 1, 
    title: 'Midterm Exam', 
    subject: 'INT PROG', 
    date: '2025-03-26' 
  },
  { 
    id: 2, 
    title: 'Final Exam', 
    subject: 'INT PROG', 
    date: '2025-05-09' 
  }
];

// tejares-get
router.get('/', (req, res) => {
  res.json(exams);
});

<<<<<<< HEAD
=======
// go-post
router.post('/', (req, res) => {
    const newExam = {
      id: exams.length + 1,
      ...req.body
    };
    exams.push(newExam);
    res.status(201).json(newExam);
  });

>>>>>>> 51d94c35510912fe770f9684f41de4d69106bffb
module.exports = router;