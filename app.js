const express = require('express')
const app = express()
const genreRoute = require("./routes/genreRoute")
const gameRoute = require('./routes/gameRoute')

app.use('/genre', genreRoute )

app.use("/game", gameRoute)

app.get('/', (req, res) => {
    res.send("hlo")
})

const PORT = 3000

app.listen(PORT, () => console.log("server started at PORT 3000"))