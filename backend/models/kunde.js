const mongoose = require("mongoose")

const KundeSchema = new mongoose.Schema({
    name: { type: String, required: true, minlength: 2},
    age: { type: Number, require: true, min: 18 },
    eMail: String,
    telNo: { type: Number, require: true, minlength: 11},
    location: String,
    bookings: [{ // bitti
        type: mongoose.Schema.Types.ObjectId,
        ref: "Booking",
        autopopulate: { maxDepth: 2 }
    }],
    hotelBookings: [{ // eklenecekler var
        type: mongoose.Schema.Types.ObjectId,
        ref: "HotelBooking",
        autopopulate: { maxDepth: 2 }
    }]
})

KundeSchema.plugin(require("mongoose-autopopulate"))

module.exports = mongoose.model("Kunde", KundeSchema)
