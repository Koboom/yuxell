const { rufZimmerService } = require('../services')

const router = require('express').Router()

router.get('/', async (req, res) => {
  const rufZimmern = await rufZimmerService.load()

  res.render('rufZimmern', { rufZimmern })
})

router.get('/search', async (req, res) => {
  const etage = req.query.etage
  const no = req.query.no

  const query = {}

  if (etage) query.etage = etage
  if (no) query.no = no

  const rufZimmern = await rufZimmerService.query(query)

  res.render('rufZimmern', { rufZimmern })
})

module.exports = router