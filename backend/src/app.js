const express = require("express")
const authRoute = require("./routes/auth.routes.js")
const musicRoute = require("./routes/music.routes.js")
const cookieParser = require("cookie-parser")

const app = express()
app.use(express.json())
app.use(cookieParser())


// api routes

app.use("/api/auth",authRoute)
app.use("/api/music",musicRoute)


module.exports = app