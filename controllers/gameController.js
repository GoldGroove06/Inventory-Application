const db = require("../db/queries");

async function getGame (req, res) {
     const {genre} = req.params
     console.log(genre)
     const games = await db.getAllGame(genre);
     console.log("Usernames: ", games);
     res.send("Genres: " + games.map(game => game.game_name).join(", "));
    
}

module.exports = {getGame}