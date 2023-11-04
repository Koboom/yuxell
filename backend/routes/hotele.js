const { hotelService, rufZimmerService } = require("../services")

const router = require("express").Router()

router.get("/", async (req,res) => {
    res.send(await hotelService.load())
})

router.post("/", async (req, res, next) => {
    try {
        const hotel = await hotelService.insert(req.body)
        res.send(hotel)
    } catch(e) {
        next(e)
    }
})

router.delete("/:hotelId", async (req, res) => {
    await hotelService.removeBy("_id", req.params.hotelId)

    res.send("OK")
})

router.get("/:hotelId", async (req, res) => {
    const hotel = await hotelService.find(req.params.hotelId)

    if(!hotel) return res.status(404)
    res.send(hotel)
})

router.post("/:hotelId/rufZimmern", async (req, res) => {
    const { hotelId } = req.params
    const { zimmerId } = req.body

    const rufZimmer = await rufZimmerService(zimmerId, hotelId)

    res.send(rufZimmer)
})



module.exports = router