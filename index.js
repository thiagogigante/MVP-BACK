// import path from "path";
import mongoose from "mongoose";
import apiRoute from "./src/routes/api.js";
import express from "express";
const app = express();

mongoose.connect(
    "mongodb+srv://brunonunes72:seEnurx9hH4qNCZ1@cluster0.yridb.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
);

const db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error:"));
db.once("open", () => {
    console.log("Connected to MongoDB");
});

app.use("/api", apiRoute);

app.listen(3333, () => {
    console.log("Server is running");
});
