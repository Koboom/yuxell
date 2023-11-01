const Hotel = require("../models/hotel");
const BaseDatabase = require("./base-database");

class HotelDatabase extends BaseDatabase {
     findByName(name) {
        return this.findBy("name", name)
    }
}

module.exports = new HotelDatabase(Hotel)