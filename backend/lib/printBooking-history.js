const colors = require("colors")
function printBooking(booking) {
    console.log(`${colors.yellow(booking.kunde.name)} book von ${colors.yellow(booking.destination)} nach ${colors.yellow(booking.origin)} mit ${colors.yellow(booking.driver.name)} `)
}

function printBookingHistory(kunde) {
    // if(!Array.isArray(kunde.bookings)) return //eğer kunde.bookings array değilse dönmesin
    // if(!kunde.name) throw new Error("Kunde must have a name") // kunde ismi yoksa error dönsün
    if(kunde.bookings.length == 0) {
        return console.log(`${colors.yellow(kunde.name)} has no booking yet.`)
    }
    kunde.bookings.forEach(printBooking)
}
function printZimmerBuchung(zimmerBuchung) {
    if(zimmerBuchung.length == 0) {
        return console.log("Keine buchung bis jetzt")
    }
    console.log(`${colors.yellow(zimmerBuchung.hotel.name)} vom ${colors.yellow(zimmerBuchung.anfangsDatum)} bis ${colors.yellow(zimmerBuchung.endDatum)} gebucht vom :`)
    console.log(`Name:  ${colors.yellow(zimmerBuchung.kunde.fullName)}`)
    console.log(`Restaurant: ${colors.yellow(zimmerBuchung.restaurant.name)}`)
}
function printZimmerBuchungHistory(kunde) {
    kunde.zimmerBuchungen.forEach(printZimmerBuchung)
}

module.exports = printBookingHistory