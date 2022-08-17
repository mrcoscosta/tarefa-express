
const express = require("express")
const router = express.Router()
const path = require('path')
const basepath = path.join(__dirname, '../temple')

router.get("/", (req, res) => {
    res.sendFile(`${basepath}/home.html`)
})

router.get('/produtos', (req, res) => {
    res.sendFile(`${basepath}/index.html`)
})
router.get('/produtos/firsth', (req, res) => {
    res.sendFile(`${basepath}/app.html`)
})

module.exports = router