const express = require("express")
const router = express.Router()

//@ description
//@ route --> Get /
router.get("/", (req, res) => {
    res.render("layouts/main")
})

module.exports = router