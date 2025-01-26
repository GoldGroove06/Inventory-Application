const {Router} = require("express")
const db = require("../db/queries");

const categoryRoute = Router()

categoryRoute.get('/:category', async (req, res) => {
    const {category} = req.params
    const genres = await db.getAllGenre();
    console.log("Usernames: ", genres);
    res.send("Usernames: " + genres.map(genre => genre.genre_name).join(", "));
   
})

module.exports = categoryRoute
