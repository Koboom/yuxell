const mongoose = require("mongoose")

const RufZimmerSchema = new mongoose.Schema({
    zimmer: {
        type: mongoose.Schema.Types.ObjectId, // her odanın id si olsun
        ref: "Zimmer",
        autopopulate: { maxDepth: 1 }
    }
})

RufZimmerSchema.plugin(require("mongoose-autopopulate"))

module.exports = mongoose.model("RufZimmer", RufZimmerSchema)