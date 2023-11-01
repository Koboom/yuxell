const BaseDatabase = require('./base-database')
const Driver = require('../models/driver')

class DriverDatabase extends BaseDatabase {
  async findByDriverName(name) {
    return this.findBy("name", name)
  }

  async findByLocation(location) {
    return this.findBy("location", location)
  }

  async findYoungDrivers() {
    return this.query({
      age: {
        $lt: 30,
        $gte: 18
      }
    })
  }
}

module.exports = new DriverDatabase(Driver)