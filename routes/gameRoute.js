const {Router} = require("express")
const {getGame, deleteGame, addGame} = require("../controllers/gameController")
const { editGame } = require("../db/queries")

const gameRoute = Router()

gameRoute.get("/:gameID", getGame)
gameRoute.put('/edit/:id', editGame)
gameRoute.post("/add", addGame)
gameRoute.delete('/:gameID', deleteGame)

module.exports = gameRoute