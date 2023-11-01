const BaseService = require("./base-service")
const Hotel = require("../models/hotel")

class HotelService extends BaseService {
    async findById(name) {
        return this.findBy("name", name)
    }
}

module.exports = new HotelService(Hotel)