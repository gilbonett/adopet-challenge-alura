const bodyParser = require ('body-parser')
const tutors = require('./tutorsRoute')


module.exports = app => {
    app.use(
        bodyParser.json(),
        tutors,
    )
}