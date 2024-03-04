const express = require("express")
const app = express()
const router = express.Router()
const {donateSchema,receiveSchema} = require("./Schema")
app.use("/",router)

router.post("/donateForm",async(req,res)=>{
  const data = req.data;
  const donate= new donateSchema(data)
  await donate.save()
  console.log(data);
  try {
    res.send({message : true , donate:donate})
  } catch (error) {
    console.log(error);
    res.status(500).json({error : error.message})
  }
});