const {Router} = require ('express')
const AdoptionController = require('../controllers/AdoptionController')

const router = Router()

router
    .get('/adoption', AdoptionController.getAdoptionsAll)
    .get('/adoption/:id', AdoptionController.getAdoptionId)
    .post('/adoption', AdoptionController.postAdoption)

module.exports = router