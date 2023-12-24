const express = require("express")
const bodyParser = require("body-parser")
const cors = require("cors")

const kundenRouter = require("./routes/kunden")
const driversRouter = require("./routes/drivers")
const bookingsRouter = require("./routes/bookings")
const hotelRouter = require("./routes/hotele")
const hotelBookingsRouter = require("./routes/hotelBookings")
const zimmernRouter = require("./routes/zimmern")
const rufZimmernRouter = require("./routes/rufZimmern")
const indexRouter = require("./routes/index")

require("./mongo-connection")


const app = express()
app.use(bodyParser.json())
app.use(cors())

app.set("view engine", "pug")

app.use("/kunden", kundenRouter)
app.use("/drivers", driversRouter)
app.use("/bookings", bookingsRouter)
app.use("/hotel", hotelRouter)
app.use("/hotelBookings", hotelBookingsRouter)
app.use("/zimmern", zimmernRouter)
app.use("/rufZimmern", rufZimmernRouter)
app.use("/", indexRouter)


const PORT = process.env.PORT || 3000;

app.listen(PORT, () =>{
    console.log(`started listening on ${PORT}`)
})

module.exports = app