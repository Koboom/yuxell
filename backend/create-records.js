const Kunde = require("./models/kunde")
const Driver = require("./models/driver")
const Hotel = require("./models/hotel")
const Zimmern = require("./backend/models/zimmern")
const Restaurant = require("./backend/models/restaurant")
const { printBookingHistory, printZimmerBuchungHistory } = require("./lib/printBooking-history")
const {kundeDatabase, hotelDatabase, driverDatabase, restaurantDatabase, zimmernDatabase} = require("./database")

const yuksel = new Kunde(undefined, "Mehmet Yüksel Koyunoglu","47","nykoyunoglu@mail.com","01781105197","Bielefeld Brackwede","Bielefeld","Bielefeld")
const seref = new Kunde(undefined, "Seref Demir","47","seref@mail.com","017811051980","Bielefeld Senne","Bielefeld","Bielefeld")
const veli = new Kunde(undefined, "Veli Özer","51","veli@mail.com","017811051971","Bielefeld Windelsbleicher","Bielefeld","Bielefeld")
const stefan = new Driver(undefined,"Stefan","Bielefeld")
const zimmer = new Zimmern("yes","no","no","no","no")

const kolnerDom = new Hotel("Hotel Kölner Dom", "Köln", zimmer)
const kolnerDomRest = new Restaurant("Kölner Dom Restaurant","yes","yes","no")

yuksel.book(stefan,"Bielefeld","Köln")
seref.book(stefan,"Bielefeld","Köln")
veli.book(stefan,"Bielefeld","Köln")

yuksel.zimmerBucht(kolnerDom,kolnerDomRest,"30.12.2023","10.01.2024")
seref.zimmerBucht(kolnerDom,kolnerDomRest,"30.12.2023","10.01.2024")
veli.zimmerBucht(kolnerDom, kolnerDomRest,"30.12.2023","10.01.2024")


// const passengers = kundeDatabase.load()
// passengers.forEach(printBookingHistory)
// passengers.forEach(printZimmerBuchungHistory)


