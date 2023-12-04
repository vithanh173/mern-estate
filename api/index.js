import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRouter from "./routes/User.route.js";
dotenv.config();

const app = express();

mongoose.connect(process.env.MONGO)
    .then(() => {
        console.log("Connected to MongoDB");
    })
    .catch((error) => {
        console.log(error)
    })

app.listen(3000, () => {
    console.log("Server is listening on port 3000");
})

app.use("/api/user", userRouter);