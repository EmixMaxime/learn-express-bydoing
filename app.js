const express = require('express')
const app = express()

app.use(express.static('public'))
// ALTER TABLE film ALTER COLUMN title SET NOT NULL;
// ALTER TABLE film ALTER COLUMN date_expire SET DEFAULT NULL;

const filmScreeningRouter = require('./http/routes/film_screening')
const filmRouter = require('./http/routes/film')
app.use('/film_screening', filmScreeningRouter)
app.use('/film', filmRouter)

app.get('/', (request, response) => {
    response.sendStatus(200)
})

module.exports = app
