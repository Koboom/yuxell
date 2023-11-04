const { hotelBookingService } = require('../services')

const router = require('express').Router()

router.get('/', async (req, res) => {
  const hotelBookings = await hotelBookingService.load()

  res.render('hotelBookings', { hotelBookings })
})

router.get('/search', async (req, res) => {
  const name = req.query.name
  const telNo = req.query.telNo

  const query = {}

  if (name) query.name = name
  if (telNo) query.telNo = telNo

  const hotelBookings = await hotelBookingService.query(query)

  res.render('hotelBookings', { hotelBookings })
})

module.exports = router