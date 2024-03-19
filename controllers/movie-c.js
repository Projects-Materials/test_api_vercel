const { collection } = require("sigma-error");
const client = require("../client.js");
module.exports =  conc = async(req,res)=>{
    try{
        const cached_value = await client.get('cached_value');
        if(cached_value) return res.status(200).json(movies);
        const movies = await collection.trendingMovies(1);
        await client.set('cached_value', movies);
        await client.expire('cached_value', 20);
        res.status(200).json(movies)
    }catch(error){
        res.status(500).json({message: error.message});
    }
}
