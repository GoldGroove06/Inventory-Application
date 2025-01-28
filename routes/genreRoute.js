const {Router} = require("express")
const {getGenre} = require("../controllers/genreController")
const { deleteGenre } = require("../db/queries")

const genreRoute = Router()

genreRoute.get('/:genre',getGenre )

genreRoute.delete('/:genre', deleteGenre)

module.exports = genreRoute
