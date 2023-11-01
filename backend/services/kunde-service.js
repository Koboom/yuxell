const BaseService = require("./base-service")
const Kunde = require("../models/kunde")

class KundeService extends BaseService {
    async findByName(name) { // kunde nın ismini bulsun
        return this.findBy("name", name)
    }

    async findYoungKunde() {
        return this.query({
            age: {
                $lt: 85,
                $gte: 18
            }
        })
    }
}

module.exports = new KundeService(Kunde)