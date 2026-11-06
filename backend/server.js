require("dotenv").config()
const app = require("./src/app.js")
const connectDB = require("./src/db/db.js")


//connecting to db
connectDB()

app.listen(3000,(req,res)=>{
    console.log("Server listening in port 3000 🛜")
})