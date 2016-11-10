const express = require('express')
const router = express.Router()
const client = require('../../src/pg')

const model = require('../../src/model/FilmScreening')
const Model = new model()

router.get('/',  async (request, response) => {
    const filmScreenings = await Model.getAllForToday()
    return response.json(filmScreenings)
})

module.exports = router