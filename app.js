import express from "express";
// import userRouter from "./routes/users.routes.js";
import dotenv from "dotenv";
import connectDB from "./config/db.js";

const app = express();


dotenv.config();
connectDB();

app.use(express.json());

// BASE ROUTE
app.get("/", (req, res) => {
  res.send("application is running.....");
});

// USER ROUTES
// app.use("/api/application", userRouter);

export default app;