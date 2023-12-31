const mongoose = require("mongoose")

const HotelSchema = new mongoose.Schema({
    name: { type: String, required: true, minlength: 2 },
    zimmerZahl: { type: Number, required: true, min: 5},
    eMail: String,
    stern: Number,
    eMail: String,
    telNo: { type: Number, required: true, minlength: 11},
    location: String,
    rufZimmern: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "RufZimmer",
        autopopulate: { maxDepth: 2 }
    }],
    callPersonal: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "CallPersonal",
        autopopulate: { maxDepth: 2 }
    }]
})

HotelSchema.plugin(require("mongoose-autopopulate"))

module.exports = mongoose.model("Hotel", HotelSchema)
