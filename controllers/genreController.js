const db = require("../db/queries");

async function getGenre (req, res) {
     const {genre} = req.params
     const genres = await db.getAllGenre();
     console.log("Usernames: ", genres);
     res.send("Genres: " + genres.map(genre => genre.genre_name).join(", "));
    
}

module.exports = {getGenre}