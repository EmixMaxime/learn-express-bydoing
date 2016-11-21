const express = require('express')
const router = express.Router()

const filmController = require('../controllers/FilmController')

FilmRoutes = {
	validateName (req, res, next) {
		req.checkParams('title', 'Invalid title').notEmpty().isAlphanumeric() // isString
		const errors = req.validationErrors()
		console.log('Validation errors : ', errors)
		if (errors) return res.json(500, {error: true, errorsMessage: errors})
		next() // Else, continue middleware execution
	}
}

router.get('/', filmController.index)
router.get('/:title', FilmRoutes.validateName, filmController.get)

module.exports = router