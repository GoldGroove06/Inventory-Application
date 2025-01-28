const express = require('express')
const app = express()
const genreRoute = require("./routes/genreRoute")
const gameRoute = require('./routes/gameRoute')
const  getHomepage  = require('./routes/homepageRoute')
const path = require("node:path");
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");


app.use('/genre', genreRoute )

app.use("/game", gameRoute)

app.use('/', getHomepage)


const PORT = 3000

app.listen(PORT, () => console.log("server started at PORT 3000"))