const app = require('../..')
const request = require('supertest')(app)

test('creates a new booking', async (done) => {
  const passengerToCreate = {
    name: 'Test kunde',
    location: 'Bielefeld'
  }

  const driverToCreate = {
    name: 'Test driver',
    location: 'München',
    age: 18
  }

  const origin = 'Bielefeld'
  const destination = 'München'

  const passengerResponse = await request
    .post('/kunden')
    .send(passengerToCreate)
    .expect(200)

  const driverResponse = await request
    .post('/drivers')
    .send(driverToCreate)
    .expect(200)

  const bookingResponse = await request
    .post(`/kunden/${passengerResponse.body._id}/bookings`)
    .send({
      driverId: driverResponse.body._id,
      origin,
      destination
    })
    .expect(200)

  const bookingCreated = bookingResponse.body

  expect(bookingCreated).toMatchObject({
    driver: driverResponse.body,
    kunde: passengerResponse.body,
    origin,
    destination
  })

  done()
})