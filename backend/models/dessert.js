const mongoose = require("mongoose")

const DessertSchema = new mongoose.Schema({
    name: String,
})

DessertSchema.plugin(require("mongoose-autopopulate"))

module.exports = mongoose.model("Dessert", DessertSchema)