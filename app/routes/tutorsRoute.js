const {Router} = require ('express')
const TutorController = require('../controllers/TutorController')

const router = Router()

router
    .get('/user/tutors', TutorController.fetchAllTutors)
    .get('/user/tutor/:id', TutorController.searchTutorById)
    .put('/user/tutor/:id', TutorController.updateTutor)
    .delete('/user/tutor/:id', TutorController.deleteTutor)

module.exports = router