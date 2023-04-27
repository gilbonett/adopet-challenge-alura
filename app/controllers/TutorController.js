const database = require('../models')

class TutorController {

    static async fetchAllTutors(req, res){
        try {
            const findTutors = await database.User.findAll({
                where: {
                    role: 'tutor'
                }
            })
            return res.status(200).json(findTutors)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async searchTutorById(req, res){
        const {id} = req.params
        try {
            const resultTutor = await database.User.findOne({
                where: {
                    id: Number(id),
                    role: 'tutor'
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

    static async updateTutor(req, res) {
        const uptadedTutor = req.body
        const {id} = req.params
        try {
            const resultTutor = await database.User.findOne({
                where: {id: Number(id), role: 'tutor'}
            })
            if(resultTutor !== null){
            await database.User.update(uptadedTutor, {where: {id:Number(id)}})
            const tutorUpdated = await database.User.findOne({where: {id:Number(id)}})
            return res.status(200).json(tutorUpdated)
            } else {
                return res.status(400).send({message:'tutor id not found'})
            }
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async deleteTutor(req, res) {
        const {id}= req.params
        try {
            const resultTutor = await database.User.findOne({
                where: {id: Number(id), role: 'tutor'}
            })
            if(resultTutor !== null){
                await database.User.destroy({where: {id : Number(id)}})
                return res.status(200).send({message: `successfully deleted tutor ${id} `})
            } else {
                return res.status(400).send({message:'tutor id not found'})
            }
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

}

module.exports = TutorController
