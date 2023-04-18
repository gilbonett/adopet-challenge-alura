const database = require('../models');



class AdoptionController {
    static async getAdoptionsAll(req, res){
        try {
            const findAdoptions = await database.Adoptions.findAll()
            return res.status(200).json(findAdoptions)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async getAdoptionId(req, res){
        const id = req.params.id
        try {
            const resultAdoption = await database.Adoptions.findOne({
                where: {
                    id: Number(id)
                }
            })
            if(resultAdoption !== null){
                return res.status(200).json(resultAdoption)
            } else{
                return res.status(400).send({message:'Adoption id not found'})
            }
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async postAdoption(req, res) {
        const {shelter_id, pet_id, tutor_id} = req.params
        const information = req.body
        try {
            const newAdoption = await database.Adoption.create({pet_id:Number(pet_id), ...information}, shelter_id, tutor_id)
            return res.status(200).json(newAdoption)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }


}

module.exports = AdoptionController
