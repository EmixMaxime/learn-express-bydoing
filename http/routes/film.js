const express = require('express')
const router = express.Router()

const model = require('../../src/model/FilmModel')
const FilmModel = new model()

router.get('/affiche', async (request, response) => {
	let films
	if (request.query.to) {
		/* Validation */
		request.checkQuery('to', 'Invalid getparam').isDate()
		const errors = request.validationErrors()
		if (errors) return response.status(500).json(errors)

		/* getFilm with date */
		films = await FilmModel.getAfficheFilmToDate(new Date(request.query.to))
	} else {
    	films = await FilmModel.getCurrentlyFilmAffiche()
	}
	const errors = request.validationErrors()
    return response.json(films)
})

module.exports = router