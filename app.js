const express = require('express')
const app = express()
const categoryRoute = require("./routes/categoryRoute")
const itemRoute = require('./routes/itemRoute')

app.use('/category', categoryRoute )

app.use("/item", itemRoute)

app.get('/', (req, res) => {
    res.send("hlo")
})

const PORT = 3000

app.listen(PORT, () => console.log("server started at PORT 3000"))