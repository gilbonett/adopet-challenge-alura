const {Router} = require ('express')
const PetController = require('../controllers/PetController')

const router = Router()

router
    .get('/pets', PetController.fetchAllUnadoptedPet)
    .get('/pets/all', PetController.fetchAllPet)
    .get('/pet/:id', PetController.searchPetById)
    .post('/pet', PetController.CreatePet)
    .put('/pet/:id', PetController.updatePet)
    .delete('/pet/:id', PetController.deletePet)

module.exports = router