const mongoose = require("mongoose")

const CallPersonalSchema = new mongoose.Schema({
    name: { type: String, required: true, minlength: 2},
    department: String,
    age: { type: Number, required: true, min: 18 },
    adresse: String,
    eMail: String,
    telNo: { type: Number, required: true, min: 11},
    originInHotel: String,
    destinationInHotel: String,
    bookingsFreeTime: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "BookingFreeTime",
        autopopulate: { maxDepth: 2 }
    }],
    // bookingsSickTime: [{
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: "BookingSickTime",
    //     autopopulate: { maxDepth: 2 }
    // }]

})

CallPersonalSchema.plugin(require("mongoose-autopopulate"))

module.exports = mongoose.model("CallPersonal", CallPersonalSchema)