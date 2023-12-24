const User = require("../models/user")
const bcrypt = require("bcrypt")
const BaseService = require("./base-service")

class LoginService extends BaseService {

    async login(req, res) {
        const { username, password } = req.body

        try {
            const user = await User.findOne({ username })

            if(!user) {
                return res.status(404).json({ error: "Kullanıcı bulunamadı." })
            }

            const passwordMatch = await bcrypt.compare(password, user.password)

            if(!passwordMatch) {
                return res.status(401).json({ error: "Şifre eşleşmiyor."})
            }

            res.json({ error: "Giriş başarılı."})
        } catch (error) {
            res.status(500).json({ error: "Giriş yapılırken bir hata oluştu. "})
        }
    }

}


module.exports = new LoginService(User)