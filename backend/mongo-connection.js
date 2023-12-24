const mongoose = require('mongoose')

const connectionString = process.env.MONGODB_CONNECTION_STRING || 'mongodb://localhost:27017/VerwaltungsApp'

mongoose.connect(connectionString, { useNewUrlParser: true, useUnifiedTopology: true })

var db = mongoose.connection
db.on('error', console.error.bind(console, 'connection error:'))
db.once('open', function () {
  console.log('we are connected to mongodb!')
  console.log(`${connectionString}`)
})