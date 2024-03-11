const express = require("express")
const app = express()
const PORT = process.env.PORT || 4000;
const connectDB = require("./db")
const router = require("./routes")
const cors = require("cors")
app.use(cors)
connectDB()

app.listen(PORT,()=>{
  console.log(`Server is running at http://localhost:${PORT}`);
})


app.get("/",(req,res)=>{
  res.send("Welcome to my capstone project !!")
})