const mongoose = require("mongoose")

const DrinkSchema = new mongoose.Schema({
    name: String
})

DrinkSchema.plugin(require("mongoose-autopopulate"))

module.exports = mongoose.model("Drink", DrinkSchema)