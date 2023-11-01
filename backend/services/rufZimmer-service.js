const BaseService = require("./base-service")
const RufZimmer = require("../models/rufZimmer")
const zimmerService = require("./zimmer-service")
const hotelService = require("./hotel-service")

class RufZimmerService extends BaseService {
    async findByZimmerId(zimmerId) {
        return this.findBy("zimmer", zimmerId)
    }

    async findByHotelId(hotelId) {
        return this.findBy("hotel", hotelId)
    }

    async ruft(zimmerId, hotelId) {
        const zimmer = await zimmerService.find(zimmerId)
        const hotel = await hotelService.find(hotelId)

        const rufZimmer = await this.insert({ zimmer, hotel })
        hotel.rufZimmern.push(rufZimmer)

        await hotel.save()

        return rufZimmer
    }
}

module.exports = new RufZimmerService(RufZimmer)