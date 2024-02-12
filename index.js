const express = require("express");
const dotenv = require("dotenv");
const MovieRouter = require("./routes/movies");
dotenv.config({});
const app = express();
const PORT = process.env.PORT || 3000;

app.get("/",(req,res)=>{
    res.json({
        success: "Hello Dude. I am Working !",
        status_code: 200,
        status: "Online"
        })
    })
app.use("/movies", MovieRouter)

app.listen(PORT,()=>{
    console.log(`Server is Running on Port ${PORT}`)
})