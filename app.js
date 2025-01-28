const express = require('express')
const app = express()
const genreRoute = require("./routes/genreRoute")
const gameRoute = require('./routes/gameRoute')
const  getHomepage  = require('./routes/homepageRoute')


app.use('/genre', genreRoute )

app.use("/game", gameRoute)

app.use('/', getHomepage)


const PORT = 3000

app.listen(PORT, () => console.log("server started at PORT 3000"))