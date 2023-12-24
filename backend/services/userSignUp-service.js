const BaseService = require("./base-service")
const bcrypt = require("bcrypt")
const User = require("../models/user")

class UserService extends BaseService {

    async signUp(req, res) {
        const { username, email, password } = req.body

        //hash
        const hashedPassword = await bcrypt.hash(password, 10)
        //new user
        const user = new User({
            username,
            email,
            password: hashedPassword
        })

        try {
            await user.save()
            res.status(201).json({ message: "Kullanıcı başarıyla oluşturuldu." })
        }
        catch (error) {
            res.status(500).json( { error: "Kullanıcı oluştururken bir hata oluştu." })
        }
    }

}


module.exports = new UserService(User)