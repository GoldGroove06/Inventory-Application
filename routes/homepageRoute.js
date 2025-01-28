const {Router} = require("express")
const {getAllGenres} = require("../controllers/genreController")

const homepageRoute = Router()

homepageRoute.get('/',getAllGenres )

module.exports = homepageRoute
