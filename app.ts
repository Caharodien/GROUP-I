import express from "express";
import examRoutes from "./routes/exam"; //  Ensure correct import path

const app = express();

app.use(express.json()); //  Middleware to parse JSON request body
app.use("/api", examRoutes); //  Use exam routes

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
