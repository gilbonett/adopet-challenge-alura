const database = require('../models')

class ShelterController {
    static async getSheltersAll(req, res){
        try {
            const findShelters = await database.Shelter.findAll()
            return res.status(200).json(findShelters)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async getShelterId(req, res){
        const id = req.params.id
        try {
            const resultShelter = await database.Shelter.findOne({
                where: {
                    id: Number(id)
                }
            })
            if(resultShelter !== null){
                return res.status(200).json(resultShelter)
            } else{
                return res.status(400).send({message:'Shelter id not found'})
            }
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async postShelter(req, res) {
        const addShelter = req.body 
        try {
            const newShelter = await database.Shelter.create(addShelter)
            return res.status(200).json(newShelter)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async updateShelter(req, res) {
        const uptadedShelter = req.body
        const id = req.params.id
        try {
            const resultShelter = await database.Shelter.findOne({
                where: {id: Number(id)}
            })
            if(resultShelter !== null){
            await database.Shelter.update(uptadedShelter, {where: {id:Number(id)}})
            const ShelterUpdated = await database.Shelter.findOne({where: {id:Number(id)}})
            return res.status(200).json(ShelterUpdated)
            } else {
                return res.status(400).send({message:'Shelter id not found'})
            }
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async deleteShelter(req, res) {
        const id = req.params.id
        try {
            const resultShelter = await database.Shelter.findOne({
                where: {id: Number(id)}
            })
            console.log(resultShelter) //TODO
            if(resultShelter !== null){
                await database.Shelter.destroy({where: {id : Number(id)}})
                return res.status(200).send({message: 'Shelter deleted successfully'})
            } else {
                return res.status(400).send({message:'Shelter id not found'})
            }
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

}

module.exports = ShelterController
