const Sequelize = require('sequelize')
const database = require('../models')
const { all } = require('../routes/petsRoute')


class PetController {
    
    static async fetchAllUnadoptedPet(req, res){
        try {
            const findPetsUnadopted = await database.Pet.findAll({
                where: {
                    adopted: false
                }
            })
            return res.status(200).json(findPetsUnadopted)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async fetchAllPet(req, res){
        try {
            const allPets = await database.Pet.scope(all).findAll()
            return res.status(200).json(allPets)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async searchPetById(req, res){
        const {id} = req.params
        try {
            const resultPet = await database.Pet.findOne({
                where: {
                    id: Number(id)
                }
            })
            if(resultPet !== null){
                return res.status(200).json(resultPet)
            } else{
                return res.status(400).send({message:`Pet ${id} not found`})
            }
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async CreatePet(req, res) {
        try {
            const {shelter_id} = req.body
            const shelter = await database.User.findOne({ 
            where: {
                id: Number(shelter_id),
                role: 'shelter'
            }
        })
        if (!shelter) {
            return res.status(400).send({message:`Shelter ${shelter_id} not found`})
        } else{
            const Pet = req.body
            const newPet = await database.Pet.create(Pet)
            return res.status(200).json(newPet)
        }
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }


    static async updatePet(req, res) {
        const uptadedPet = req.body
        const {id} = req.params
        try {
            const resultPet = await database.Pet.findOne({
                where: {id: Number(id)}
            })
            if(resultPet !== null){
            await database.Pet.update(uptadedPet, {where: {id:Number(id)}})
            const PetUpdated = await database.Pet.findOne({where: {id:Number(id)}})
            return res.status(200).json(PetUpdated)
            } else {
                return res.status(400).send({message:`Pet ${id} not found`})
            }
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async deletePet(req, res) {
        const {id} = req.params
        try {
            const resultPet = await database.Pet.findOne({
                where: {id: Number(id)}
            })
            if(resultPet !== null){
                await database.Pet.destroy({where: {id : Number(id)}})
                return res.status(200).send({message: `Pet ${id} deleted successfully`})
            } else {
                return res.status(400).send({message:`Pet ${id} not found`})
            }
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

}

module.exports = PetController
