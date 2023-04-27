const database = require('../models')

class ShelterController {
    static async fetchAllShelters(req, res){
        try {
            const findShelters = await database.User.findAll({
                where: {
                    role: 'shelter'
                }
            })
            return res.status(200).json(findShelters)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async searchShelterById(req, res){
        const id = req.params.id
        try {
            const resultShelter = await database.User.findOne({
                where: {
                    id: Number(id),
                    role: 'shelter'
                }
            })
            if(resultShelter !== null){
                return res.status(200).json(resultShelter)
            } else{
                return res.status(400).send({message:`Shelter ${id} not found`})
            }
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async updateShelter(req, res) {
        const uptadedShelter = req.body
        const {id} = req.params
        try {
            const resultShelter = await database.User.findOne({
                where: {id: Number(id), role: 'shelter'}
            })
            if(resultShelter !== null){
            await database.User.update(uptadedShelter, {where: {id:Number(id)}})
            const shelterUpdated = await database.User.findOne({where: {id:Number(id)}})
            return res.status(200).json(shelterUpdated)
            } else {
                return res.status(400).send({message:`Shelter ${id} not found`})
            }
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async deleteShelter(req, res) {
        const id = req.params.id
        try {
            const resultShelter = await database.User.findOne({
                where: {id: Number(id), role: 'shelter'}
            })
            if(resultShelter !== null){
                await database.User.destroy({where: {id : Number(id)}})
                return res.status(200).send({message: `successfully deleted shelter ${id} `})
            } else {
                return res.status(400).send({message:'shelter id not found'})
            }
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

}

module.exports = ShelterController
