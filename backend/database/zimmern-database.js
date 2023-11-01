const Zimmern = require("../models/zimmern");
const BaseDatabase = require("./base-database");

class ZimmerDatabase extends BaseDatabase {
    findByName(name) {
        return this.findBy("name", name)
    }
}

module.exports = new ZimmerDatabase(Zimmern)