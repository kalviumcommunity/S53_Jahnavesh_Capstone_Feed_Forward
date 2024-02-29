const express = require("express")
const app = express()
const PORT = process.env.PORT || 3000;
const connectDB = require("./db")
connectDB()

app.listen(PORT,()=>{
  console.log(`Server is running at http://localhost:${PORT}`);
})


app.get("/",(req,res)=>{
  res.send("Welcome to my capstone project !!")
})