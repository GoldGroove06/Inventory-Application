const {Router} = require("express")
const {getGame, deleteGame} = require("../controllers/gameController")

const gameRoute = Router()

gameRoute.get("/:gameID", getGame)

gameRoute.delete('/:gameID', deleteGame)

module.exports = gameRoute