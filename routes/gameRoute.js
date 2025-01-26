const {Router} = require("express")
const {getGame} = require("../controllers/gameController")
const gameRoute = Router()

gameRoute.get("/:genre", getGame)

module.exports = gameRoute