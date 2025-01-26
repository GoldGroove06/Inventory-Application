const {Router} = require("express")
const itemRoute = Router()

itemRoute.get("/:item", (req, res) => {
    const {item} = req.params
    res.send(`${item}`)
})

module.exports = itemRoute