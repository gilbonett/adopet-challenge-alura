const {Router} = require ('express')
const UsersController = require('../controllers/UserController')
const authController = require('../controllers/authController')


const router = Router()

router
    .get('/users', UsersController.fetchAllUsers) 
    .post('/register', authController.Cadastro)
    .post('/login', authController.Login)


module.exports = router