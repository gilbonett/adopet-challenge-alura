const database = require('../models')

class PetController {
    static async getPetsAll(req, res){
        try {
            const findPets = await database.Pet.findAll()
            return res.status(200).json(findPets)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async getPetId(req, res){
        const id = req.params.id
        try {
            const resultPet = await database.Pet.findOne({
                where: {
                    id: Number(id)
                }
            })
            if(resultPet !== null){
                return res.status(200).json(resultPet)
            } else{
                return res.status(400).send({message:'Pet id not found'})
            }
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async postPet(req, res) {
        const addPet = req.body 
        try {
            const newPet = await database.Pet.create(addPet)
            return res.status(200).json(newPet)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async updatePet(req, res) {
        const uptadedPet = req.body
        const id = req.params.id
        try {
            const resultPet = await database.Pet.findOne({
                where: {id: Number(id)}
            })
            if(resultPet !== null){
            await database.Pet.update(uptadedPet, {where: {id:Number(id)}})
            const PetUpdated = await database.Pet.findOne({where: {id:Number(id)}})
            return res.status(200).json(PetUpdated)
            } else {
                return res.status(400).send({message:'Pet id not found'})
            }
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async deletePet(req, res) {
        const id = req.params.id
        try {
            const resultPet = await database.Pet.findOne({
                where: {id: Number(id)}
            })
            console.log(resultPet) //TODO
            if(resultPet !== null){
                await database.Pet.destroy({where: {id : Number(id)}})
                return res.status(200).send({message: 'Pet deleted successfully'})
            } else {
                return res.status(400).send({message:'Pet id not found'})
            }
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

}

module.exports = PetController
