const Restaurant = require("../models/restaurant");
const BaseDatabase = require("./base-database");

class RestaurantDatabase extends BaseDatabase {
    findByName(name) {
        return this.findBy("name", name)
    }
}

module.exports = new RestaurantDatabase(Restaurant)