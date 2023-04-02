const database = require('../models')

class TutorController {
    static async getTutorsAll(req, res){
        try {
            const findTutors = await database.tutors.findAll()
            return res.status(200).json(findTutors)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async getTutorId(req, res){
        const id = req.params.id
        try {
            const resultTutor = await database.tutors.findOne({
                where: {
                    id: Number(id)
                }
            })
            if(resultTutor !== null){
                return res.status(200).json(resultTutor)
            } else{
                return res.status(400).send({message:'tutor id not found'})
            }
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async postTutor(req, res) {
        const addTutor = req.body 
        try {
            const newTutor = await database.tutors.create(addTutor)
            return res.status(200).json(newTutor)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async updateTutor(req, res) {
        const uptadedTutor = req.body
        const id = req.params.id
        try {
            const resultTutor = await database.tutors.findOne({
                where: {id: Number(id)}
            })
            if(resultTutor !== null){
            await database.tutors.update(uptadedTutor, {where: {id:Number(id)}})
            const tutorUpdated = await database.tutors.findOne({where: {id:Number(id)}})
            return res.status(200).json(tutorUpdated)
            } else {
                return res.status(400).send({message:'tutor id not found'})
            }
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async deleteTutor(req, res) {
        const id = req.params.id
        try {
            const resultTutor = await database.tutors.findOne({
                where: {id: Number(id)}
            })
            console.log(resultTutor) //TODO
            if(resultTutor !== null){
                await database.tutors.destroy({where: {id : Number(id)}})
                return res.status(200).send({message: 'Tutor deleted successfully'})
            } else {
                return res.status(400).send({message:'tutor id not found'})
            }
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

}

module.exports = TutorController
