const BaseService = require("./base-service")
const Booking = require("../models/booking")
const kundeService = require("./kunde-service")
const driverService = require("./driver-service")

class BookingService extends BaseService {
    async findByKundeId(kundeId) { // kunde yi id si ile getirsin
        return this.findBy("kunde", kundeId)
    }

    async findByDriverId(driverId) { // söför ü id si ile getirsin
        return this.findBy("driver", driverId)
    }

    async book(driverId, kundeId, origin, destination) { // ana function
        const kunde = await kundeService.find(kundeId)
        const driver = await driverService.find(driverId)

        const booking = await this.insert({ driver, kunde, origin, destination }) // kendi veritabanım olsaydı new Kunde derdim ama API çalışıyorum
        kunde.bookings.push(booking) // database de olan kunde ya ekle

        await kunde.save() // database de olan kunde ya kaydet

        return booking // ve döndür
    }
}

module.exports = new BookingService(Booking)