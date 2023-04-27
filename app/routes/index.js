const bodyParser = require ('body-parser')
const tutor = require('./tutorsRoute')
const shelter = require('./sheltersRoute')
const pet = require('./petsRoute')
const user = require('./usersRoute')


module.exports = app => {
    app.use(
        bodyParser.json(),
        tutor,
        shelter,
        pet,
        user
    )
}