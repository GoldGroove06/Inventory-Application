const db = require("../db/queries");

async function getGame (req, res) {
     const {gameID} = req.params
     console.log(gameID  )
     const game = await db.getGame(gameID);
     console.log("Usernames: ", game);
     res.render("game", {game: game[0]})
     // res.send(game[0].game_name);
    
}

async function deleteGame(req, res){
     const {gameID} = req.params
     const response = await db.deleteGame(gameID);
     res.send("deleted")
}

module.exports = {getGame, deleteGame}