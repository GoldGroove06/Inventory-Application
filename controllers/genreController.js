const db = require("../db/queries");

async function getAllGenres (req, res) {
     
     const genres = await db.getAllGenre();
     console.log("Usernames: ", genres);
     res.render("homepage", {genres: genres})
     // res.send("Genres: " + genres.map(genre => genre.genre_name).join(", "));
    
}

async function getGenre (req, res) {
     const {genre} = req.params
     console.log(genre)
     const games = await db.getGenreGame(genre);
     console.log("Usernames: ", games);
     res.render("genre", {games: games})
     // res.send("Genres: " + games.map(game => game.game_name).join(", "));

}

async function deleteGenre(req, res){
     const {genre} = req.params
     const response = await db.deleteGenre(genre);
     res.send("deleted")
}

module.exports = {getAllGenres, getGenre}