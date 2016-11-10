const express = require('express')
const router = express.Router()

const model = require('../../src/model/FilmModel')
const FilmModel = new model()

router.get('/', async (request, response) => {
    const films = await FilmModel.getActualFilm()
    return response.json(films)

})

module.exports = router