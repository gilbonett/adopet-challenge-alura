const database = require('../models')


class UsersController {

    static async fetchAllUsers(req, res){
        try {
            const findUsers = await database.User.findAll()
            return res.status(200).json(findUsers)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

}


module.exports = UsersController
