const express = require("express")
const dotenv = require("dotenv")
const exphbs = require("express-handlebars")
const router = require("./routes/index")
const connectDB = require("./config/db")

dotenv.config({ path: "config/config.env" })

connectDB()
const server = express()

server.engine("hbs", exphbs.engine({
  defaultLayout: "index", extname: ".hbs"
}))
server.set("view engine", ".hbs")

server.use("/", router)


const PORT = process.env.PORT || 2121
server.listen(PORT, () => {
  console.log(`Server is runnig in ${process.env.NODE_ENV} on port ${PORT}`)
})