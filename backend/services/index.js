const bookingService = require("./booking-service")
const driverService = require("./driver-service")
const hotelService = require("./hotel-service")
const hotelBookingService = require("./hotelBooking-service")
const kundeService = require("./kunde-service")
const rufZimmerService = require("./rufZimmer-service")
const zimmerService = require("./zimmer-service")

//buradan exports yapmazsam moduller compass da görünmez

module.exports = { bookingService, driverService, kundeService, hotelService, hotelBookingService, rufZimmerService, zimmerService}