const {Router} = require ('express')
const TutorController = require('../controllers/TutorController')

const router = Router()

router
    .get('/tutors', TutorController.getTutorsAll)
    .get('/tutors/:id', TutorController.getTutorId)
    .post('/tutors', TutorController.postTutor)
    .put('/tutors/:id', TutorController.updateTutor)
    .delete('/tutors/:id', TutorController.deleteTutor)

module.exports = router