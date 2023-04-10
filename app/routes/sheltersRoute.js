const {Router} = require ('express')
const ShelterController = require('../controllers/ShelterController')

const router = Router()

router
    .get('/shelter', ShelterController.getSheltersAll)
    .get('/shelter/:id', ShelterController.getShelterId)
    .post('/shelter', ShelterController.postShelter)
    .put('/shelter/:id', ShelterController.updateShelter)
    .delete('/shelter/:id', ShelterController.deleteShelter)

module.exports = router