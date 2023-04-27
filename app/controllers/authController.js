const database = require('../models')
const config = require('../../config/authConfig')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const authConfig = require('../../config/authConfig')

class authController {

    static async Register(req, res) {
        try {
        const password = await bcrypt.hash(req.body.password, 10)
        const {name, email, role} = req.body 
            const newUser = await database.User.create({name, email, password, role})
            
            const token = jwt.sign({ id: newUser.id}, authConfig.secret, {expiresIn: authConfig.expires }  )
            res.status(200).json(newUser)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async Login(req, res) {
        const {email, password} = req.body;
        try { 
            const user = await database.User.findOne({ where: { email } })
            if(!user) {
                return res.status(404).json({message: 'Invalid email or password'})
            } 
            
            if(bcrypt.compareSync(password, user.password)) {
                const token = jwt.sign({ id: user.id}, authConfig.secret, {expiresIn: authConfig.expires }  )
                res.status(200).json({token})
            }
            
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

}


module.exports = authController
