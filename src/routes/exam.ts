router.put("/exams/:id", (req, res) => {
    const { id } = req.params;
    const { name, date } = req.body;
  
    const exam = exams.find((exam) => exam.id === parseInt(id));
  
    if (!exam) {
      return res.status(404).json({ message: "Exam not found" });
    }
  
    if (name) exam.name = name;
    if (date) exam.date = date;
  
    res.json({ message: "Exam updated successfully", exam });
  });
  