const bodyParser = require ('body-parser')
const tutors = require('./tutorsRoute')
const pets = require('./petsRoute')
const messages = require('./messagesRoute')

module.exports = app => {
    app.use(
        bodyParser.json(),
        tutors,
    )
}