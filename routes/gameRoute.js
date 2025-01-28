const {Router} = require("express")
const {getGame} = require("../controllers/gameController")
const gameRoute = Router()

gameRoute.get("/:gameID", getGame)

module.exports = gameRoute