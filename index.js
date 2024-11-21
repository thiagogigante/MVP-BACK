// import path from "path";
import "dotenv/config";
import mongoose from "mongoose";
import apiRoute from "./src/routes/index.js";
import express from "express";
const app = express();
// console.log(process.env.JWT_SECRET);

mongoose.connect(process.env.MONGO_CONNECT_URI);

const db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error:"));
db.once("open", () => {
    console.log("Connected to MongoDB");
});

app.use(express.json());
app.use("/", apiRoute);

app.listen(3000, () => {
    console.log("Server is running");
});
