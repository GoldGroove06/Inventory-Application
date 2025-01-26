const {Router} = require("express")
const {getGenre} = require("../controllers/genreController")

const genreRoute = Router()

genreRoute.get('/:genre',getGenre )

module.exports = genreRoute
