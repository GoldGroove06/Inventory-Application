const db = require("../db/queries");

async function getGame (req, res) {
     const {gameID} = req.params
     console.log(gameID  )
     const game = await db.getGame(gameID);
     console.log("Usernames: ", game);
     res.send(game[0].game_name);
    
}

module.exports = {getGame}