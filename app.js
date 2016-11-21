const express = require('express')
const expressValidator = require('express-validator')
const bodyParser = require('body-parser')
const app = express()

const parseUrlEncoded = bodyParser.urlencoded({ extended: false })
app.use(parseUrlEncoded)
app.use(expressValidator())
// app.use(express.static('public'))

// ALTER TABLE film ALTER COLUMN title SET NOT NULL;
// ALTER TABLE film ALTER COLUMN date_expire SET DEFAULT NULL;

const filmScreeningRouter = require('./app/http/routes/filmScreeningRoutes')
const filmRouter = require('./app/http/routes/filmRoutes')
app.use('/film-screening', filmScreeningRouter)
app.use('/film', filmRouter)

app.get('/', (request, response) => {
    response.sendStatus(200)
})

module.exports = app
