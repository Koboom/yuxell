const BaseService = require("./base-service")
const CallPersonal = require("../models/callPersonal")
const kundeService = require("./kunde-service")


class CallPersonalService extends BaseService {
    async findByDrinkId(drinkId) {
        return this.findBy("drink",drinkId)
    }

    async findByDinnerId(dinnerId) {//bitti
        return this.findBy("dinner",dinnerId)
    }

    async findByDessertId(dessertId) {
        return this.findBy("dessert",dessertId)
    }

    async findByCallPersonelId(personalId) {
        return this.findBy("callPersonel",personalId)
    }

    async callPersonalBooking(kundeId, dinnerId) {
        const kunde = await kundeService.find(kundeId)
        const dinner = await dinnerService.find(dinnerId)

    }
}

module.exports = new CallPersonalService(CallPersonal)