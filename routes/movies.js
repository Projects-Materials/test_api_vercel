const express = require("express");
const movieC = require("../controllers/movie-c");

const MovieRouter = express.Router();


MovieRouter
.route("/")
.get(movieC)


module.exports = MovieRouter;