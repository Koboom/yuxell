const mongoose = require("mongoose")

const HotelSchema = new mongoose.Schema({
    name: { type: String, require: true, minlength: 2 },
    zimmerZahl: { type: Number, require: true, min: 5},
    eMail: String,
    stern: Number,
    telNo: { type: Number, require: true, minlength: 11},
    location: String,
    rufZimmern: [{ // hotel şeması içinde odaları çağırmak
        type: mongoose.Schema.Types.ObjectId,
        ref: "RufZimmer",// burayı ref alsın
        autopopulate: { maxDepth: 2 }
    }]
})

HotelSchema.plugin(require("mongoose-autopopulate"))

module.exports = mongoose.model("Hotel", HotelSchema)
