const {Router} = require("express")
const {getGenre, addGenre, deleteGenre, editGenre} = require("../controllers/genreController")


const genreRoute = Router()

genreRoute.get('/:genre',getGenre )
genreRoute.post('/add', addGenre)
genreRoute.put('/edit/:id', editGenre)
genreRoute.delete('/:genre', deleteGenre)

module.exports = genreRoute
