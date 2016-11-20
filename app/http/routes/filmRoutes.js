const express = require('express')
const router = express.Router()

const filmController = require('../controllers/FilmController')

// console.log(filmController)

FilmRoutes = {
	validateName (req, res, next) {
		req.checkParams('title', 'Invalid title').notEmpty().isAlphanumeric() // isString
		const errors = req.validationErrors()
		console.log('Validation errors : ', errors)
		if (errors) return res.json(500, {error: true, errorsMessage: errors})
		next() // Else, continue middleware execution
	}
}

// router.get('/affiche', async (request, response) => {
// 	let films
// 	if (request.query.to) {
// 		/* Validation */
// 		request.checkQuery('to', 'Invalid getparam').isDate()
// 		const errors = await request.validationErrors()
// 		if (errors) return response.status(500).json(errors)

// 		/* getFilm with date */
// 		films = await FilmModel.getAfficheFilmToDate(new Date(request.query.to))
// 	} else {
//     	films = await FilmModel.getCurrentlyFilmAffiche()
// 	}
// 	const errors = request.validationErrors()
//     return response.json(films)
// })

router.get('/', filmController.index)
router.get('/:title', FilmRoutes.validateName, filmController.get)

module.exports = router