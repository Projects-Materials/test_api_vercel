const express = require("express");
const dotenv = require("dotenv");
const { collection } = require("sigma-error");
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

app.get("/movies", async(req,res)=>{
    try{
        const movies = await collection.trendingMovies(1);
        res.json(movies)
    }catch(error){
        res.status(500).json({message: error.message});
    }
})


app.listen(PORT,()=>{
    console.log(`Server is Running on Port ${PORT}`)
})