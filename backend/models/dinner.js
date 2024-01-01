const mongoose = require("mongoose")

const DinnerSchema = new mongoose.Schema({
    name: String,
})

DinnerSchema.plugin(require("mongoose-autopopulate"))

module.exports = mongoose.model("Dinner",DinnerSchema)