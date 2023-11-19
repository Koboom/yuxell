const { kundeService, bookingService } = require('../services')

const router = require('express').Router()

router.get('/', async (req, res) => {
  res.send(await kundeService.load())
})

router.post('/', async (req, res, next) => {
  try {
    const kunde = await kundeService.insert(req.body)
    res.send(kunde)
  } catch(e) {
    next(e)
  }
})

router.delete('/:kundeId', async (req, res) => {
  await kundeService.removeBy('_id', req.params.kundeId)

  res.send('OK')
})

router.get('/:kundeId', async (req, res) => {
  const kunde = await kundeService.find(req.params.kundeId)

  if (!kunde) return res.status(404)

  res.send(kunde)
  // res.render("kunde",{ kunde })
})

router.post('/:kundeId/bookings', async (req, res) => {
  const { kundeId } = req.params
  const { driverId, origin, destination } = req.body

  const booking = await bookingService.book(driverId, kundeId, origin, destination)

  res.send(booking)
})

router.patch('/:kundeId', async (req, res) => {
  const { kundeId } = req.params
  const { name } = req.body

  await kundeService.update(kundeId, { name })
})

module.exports = router