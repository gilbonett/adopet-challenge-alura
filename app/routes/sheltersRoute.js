const {Router} = require ('express')
const ShelterController = require('../controllers/ShelterController')

const router = Router()

router
    .get('/user/shelters', ShelterController.fetchAllShelters)
    .get('/user/shelter/:id', ShelterController.searchShelterById) 
    .put('/user/shelter/:id', ShelterController.updateShelter)
    .delete('/user/shelter/:id', ShelterController.deleteShelter)

module.exports = router