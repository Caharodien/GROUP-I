import express from "express";
import examRoutes from "./routes/exam"; // Ensure correct file name

// ✅ Initialize Express app
const app = express(); 

// ✅ Middleware to parse JSON requests
app.use(express.json());

// ✅ Use the exams route
app.use("/api", examRoutes);

// ✅ Start the server
app.listen(3000, () => {
  console.log("Server running on port 3000");
});
