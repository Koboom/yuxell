const BaseService = require("./base-service");
const HotelBooking = require("../models/hotelBooking")
const kundeService = require("./kunde-service")
const hotelService = require("./hotel-service")

class HotelBookingService extends BaseService {
    async findByHotelId(hotelId) {
        return this.findBy("hotel", hotelId)
    }

    async findByKundeId(kundeId) {
        return this.findBy("kunde", kundeId)
    }

    async hotelBook(hotelId, kundeId, anfangstDatum, endDatum) {
        const hotel = await hotelService.find(hotelId)
        const kunde = await kundeService.find(kundeId)

        const hotelBooking = await this.insert({ hotel, kunde, anfangstDatum, endDatum})
        kunde.hotelBookings.push(hotelBooking)

        await kunde.save()

        return hotelBooking
    }
}

module.exports = new HotelBookingService(HotelBooking)