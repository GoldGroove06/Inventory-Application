const db = require("../db/queries");

async function getAllGenres (req, res) {
     
     const genres = await db.getAllGenre();
     console.log("Usernames: ", genres);
     res.send("Genres: " + genres.map(genre => genre.genre_name).join(", "));
    
}

async function getGenre (req, res) {
     const {genre} = req.params
     console.log(genre)
     const games = await db.getGenreGame(genre);
     console.log("Usernames: ", games);
     res.send("Genres: " + games.map(game => game.game_name).join(", "));

}

module.exports = {getAllGenres, getGenre}