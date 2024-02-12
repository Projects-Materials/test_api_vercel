const { collection } = require("sigma-error");
module.exports =  conc = async(req,res)=>{
    try{
        const movies = await collection.trendingMovies(1);
        res.status(200).json(movies)
    }catch(error){
        res.status(500).json({message: error.message});
    }
}
