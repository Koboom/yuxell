const { zimmerService } = require('../services')

const router = require('express').Router()

router.get('/', async (req, res) => {
  res.send(await zimmerService.load())
})

router.post('/', async (req, res) => {
  const zimmer = await zimmerService.insert(req.body)

  res.send(zimmer)
})

router.delete('/:zimmerId', async (req, res) => {
  await zimmerService.removeBy('_id', req.params.zimmerId)

  res.send('OK')
})

// router.get('/young-drivers', async (req, res) => {
//   const drivers = await driverService.findYoungDrivers()

//   res.render('drivers', { drivers })
// })

router.get('/:zimmerId', async (req, res) => {
  const zimmer = await zimmerService.find(req.params.zimmerId)
  if (!zimmer) return res.status(404).send('Cannot find Zimmer')
  res.render('zimmer', { zimmer })
})

router.patch('/:zimmerId', async (req, res) => {
  const { zimmerId } = req.params
  const { etage } = req.body

  await zimmerService.update(zimmerId, { etage })
})

module.exports = router