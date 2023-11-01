const BaseService = require("./base-service")
const Driver = require("../models/driver")

class DriverService extends BaseService {
    async findByDriverName(name) { // söförün ismini bulsun
        return this.findBy("name", name)
    }

    async findByLocation(location) { // söförün location unun bulsun
        return this.findBy("location", location)
    }

    async findYoungDrivers() { // söför 18-30 yaş aralığında mı bulsun
        return this.query({
            age: {
                $lt: 30,
                $gte: 18
            }
        })
    }
}

module.exports = new DriverService(Driver)