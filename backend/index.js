const express = require("express")
const bodyParser = require("body-parser")
const cors = require("cors")

const kundenRouter = require("./routes/kunden")
const driversRouter = require("./routes/drivers")
const bookingsRouter = require("./routes/bookings")
const indexRouter = require("./routes/index")
require("./mongo-connection")


const app = express()
app.use(bodyParser.json())
app.use(cors())

app.set("view engine", "pug")

app.use("/kunden", kundenRouter)
app.use("/drivers", driversRouter)
app.use("/bookings", bookingsRouter)
app.use("/", indexRouter)

app.listen(3000, () =>{
    console.log("started listening on 3000")
})
module.exports = app