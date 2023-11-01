const mongoose = require("mongoose")

const HotelBookingSchema = new mongoose.Schema({
    hotel: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Hotel",
        autopopulate: { maxDepth: 1 }
    },
    kunde: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Kunde",
        autopopulate: { maxDepth: 1 }
    },
    anfangstDatum: String,
    endDatum: String
})

HotelBookingSchema.plugin(require("mongoose-autopopulate"))

module.exports = mongoose.model("HotelBooking", HotelBookingSchema)