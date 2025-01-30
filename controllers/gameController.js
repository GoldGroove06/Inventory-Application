const db = require("../db/queries");

async function getGame (req, res) {
     try{
          const {gameID} = req.params
          console.log(gameID  )
          const game = await db.getGame(gameID);
          if (!game[0]) res.render("not-found")
          console.log("Usernames: ", game);
          res.render("game", {game: game[0]})
     } catch{
          console.log("error in gameController")
     }

     
     // res.send(game[0].game_name);
    
}

async function deleteGame(req, res){
     const {gameID} = req.params
     const response = await db.deleteGame(gameID);
     res.send("deleted")
}

async function addGame(req, res) {
     const {game_name, game_genre, game_dev} = req.body
     
     const response = await db.addGame([game_name, game_genre, game_dev])
     res.send(game_name, game_genre, game_dev)
}

async function editGame(req, res) {
     const {id} = req.params
     
     const {game_name, game_genre, game_dev} = req.body
     console.log(game_name, game_genre, game_dev)
     const response = await db.editGame([game_name, game_genre, game_dev, 10])
     res.send(game_name, game_genre, game_dev)
}

module.exports = {getGame, deleteGame, addGame, editGame}