const { sum, subtract, del, multiply, printBookingHistory } = require("../printBooking-history")

test("add 2 and 3 to equal 5", () => {
    const rv = sum(3,2)

    expect(rv).toBe(5);
})

test("subtrack 3 from 10 and returns 7", () => {
    const rv = subtract(10,3)
    expect(rv).toBe(7)
})

test("Del 3 from 21 and return 7", () => {
    const rv = del(21,3)
    expect(rv).toBe(7)
})

test('multiplies two values ', () => {
    const rv = multiply(2,10)
    expect(rv).toBe(20)
})

// test("prints kunde bookings when a kunde has a booking", () => {
//     //initialization
//     const kunde = {
//         name: "Yüksel",
//         bookings: [{
//             kunde: { name: "Yüksel"},
//             driver: { name: "Stefan"},
//             origin: "Kreuzberg",
//             destination: "Köln"
//         }]
//     }
//     const consoleSpy = jest.spyOn(console, 'log')

//     //test
//     printBookingHistory(kunde)

//     //assertions
//     expect(consoleSpy).toHaveBeenCalledWith("Yüksel book von Köln nach Kreuzberg mit Stefan ")

//     //teardown
//     consoleSpy.mockRestore()
// })
