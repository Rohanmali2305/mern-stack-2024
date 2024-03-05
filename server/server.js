import express from "express";
import mongoose from "mongoose";
import cors from 'cors';

const PORT = 4000;
const app = express();
app.use(cors);

await mongoose.connect(
  "mongodb+srv://rohanmali2305:Rohan2305@cluster0.ugjmevc.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
);
console.log("MongoDB connection is successfull");

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.listen(PORT, () => {
  console.log("Server is running at http://localhost:4000");
});
