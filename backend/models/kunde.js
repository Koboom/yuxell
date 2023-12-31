const mongoose = require("mongoose")

const KundeSchema = new mongoose.Schema({
    name: { type: String, required: true, minlength: 2},
    age: { type: Number, required: true, min: 18 },
    adresse: String,
    eMail: String,
    telNo: { type: Number, required: true, minlength: 11},
    location: String,
    bookings: [{ // bitti
        type: mongoose.Schema.Types.ObjectId,
        ref: "Booking",
        autopopulate: { maxDepth: 2 }
    }],
    hotelBookings: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "HotelBooking",
        autopopulate: { maxDepth: 2 }
    }]
})

KundeSchema.plugin(require("mongoose-autopopulate"))

module.exports = mongoose.model("Kunde", KundeSchema)