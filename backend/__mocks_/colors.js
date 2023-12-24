const colors = jest.createMockFromModule("colors")

const unity = s => s // ne alırsa onu getirsin.

colors.bgRed = {}
colors.bgRed.white= unity
colors.yellow = unity
colors.blue= unity

module.exports = { colors }