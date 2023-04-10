const {Router} = require ('express')
const TutorController = require('../controllers/TutorController')

const router = Router()

router
    .get('/tutor', TutorController.getTutorsAll)
    .get('/tutor/:id', TutorController.getTutorId)
    .post('/tutor', TutorController.postTutor)
    .put('/tutor/:id', TutorController.updateTutor)
    .delete('/tutor/:id', TutorController.deleteTutor)

module.exports = router