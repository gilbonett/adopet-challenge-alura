const bodyParser = require ('body-parser')
const tutor = require('./tutorsRoute')
const shelter = require('./sheltersRoute')
const pet = require('./petsRoute')
const adoption = require('./adoptionsRoute')


module.exports = app => {
    app.use(
        bodyParser.json(),
        tutor,
        shelter,
        pet,
        adoption
    )
}