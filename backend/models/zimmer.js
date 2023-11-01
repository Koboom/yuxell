const mongoose = require("mongoose")

const ZimmerSchema = new mongoose.Schema({
    etage: { type: Number, require: true, min: 1 },//kaçıncı kat
    no: { type: Number, require: true, min: 1 },//kaç nolu oda
    zimmerTelNo: { type: Number, require, min: 1}// oda telNosu
})

module.exports = mongoose.model("Zimmer", ZimmerSchema)