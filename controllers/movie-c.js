const { collection } = require("sigma-error");
const client = require("../client.js");
module.exports =  conc = async(req,res)=>{
    try{
        const cached_value = await client.get('cached_value');
        if(cached_value) return res.status(200).json(JSON.parse({way : "From Cache", data : cached_value}));
        const movies = await collection.trendingMovies(1);
        await client.set('cached_value', JSON.stringify(movies));
        await client.expire('cached_value', 20);
        res.status(200).json({way : database, data : movies})
    }catch(error){
        res.status(500).json({error: error.message});
    }
}
