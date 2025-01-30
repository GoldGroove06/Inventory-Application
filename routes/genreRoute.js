const {Router} = require("express")
const {getGenre, addGenre} = require("../controllers/genreController")
const { deleteGenre, editGenre } = require("../db/queries")

const genreRoute = Router()

genreRoute.get('/:genre',getGenre )
genreRoute.post('/add', addGenre)
genreRoute.put('/edit/:id', editGenre)
genreRoute.delete('/:genre', deleteGenre)

module.exports = genreRoute
