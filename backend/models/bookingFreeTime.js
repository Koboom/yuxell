const mongoose = require("mongoose")

const BookingFreeTimeSchema = new mongoose.Schema({
    personal: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "CallPersonal",
        autopopulate: { maxDepth: 1 }
    }],
    hotel: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Hotel",
        autopopulate: { maxDepth: 1 }
    }],
    startDate: String,
    endDate: String
})

BookingFreeTime.plugin(require("mongoose-autopopulate"))

module.exports = mongoose.model("BookingFreeTime", BookingFreeTimeSchema)