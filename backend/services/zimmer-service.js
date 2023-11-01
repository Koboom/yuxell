const BaseService = require("./base-service")
const Zimmer = require("../models/zimmer")

class ZimmerService extends BaseService {
    async findByEtage(etage) { // hangi katta bulsun
        return this.findBy("etage", etage)
    }

    async findByNo(no) { // oda nosunu bulsun
        return this.findBy("no", no)
    }
}

module.exports = new ZimmerService(Zimmer)