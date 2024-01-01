const mongoose = require("mongoose")

const OrderSchema = new mongoose.Schema({
    dinner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Dinner",
        autopopulate: { maxDepth: 1 }
    },
    drink: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Drink",
        autopopulate: { maxDepth: 1 }
    },
    dessert: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Dessert",
        autopopulate: { maxDepth: 1 }
    }
})

OrderSchema.plugin(require("mongoose-autopopulate"))

module.exports = mongoose.model("Order", OrderSchema)