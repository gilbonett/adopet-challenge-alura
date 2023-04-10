const {Router} = require ('express')
const PetController = require('../controllers/PetController')

const router = Router()

router
    .get('/pet', PetController.getPetsAll)
    .get('/pet/:id', PetController.getPetId)
    .post('/pet', PetController.postPet)
    .put('/pet:id', PetController.updatePet)
    .delete('/pet/:id', PetController.deletePet)

module.exports = router