const model = require('../../models/FilmScreeningModel')
const Controller = require('./Controller')
const moment = require('moment')

class FilmScreeningController extends Controller {
	constructor () {
		super()
		this.index = this.index.bind(this)
	}

	/**
	 * Si on a ?to= avec une date future on affiche les séances jusque cette date.
	 * Sinon on affiche les séances pour aujourd'hui
	 */

	index (req, res, next) {
		const dateQuery = req.query.to
		if (dateQuery) {
			req.checkQuery('to', 'Invalid getparam').isDate()
			const errors = req.validationErrors()
			if (errors) return res.status(500).json(errors)

			// The date is correct
			model.getFilmScreeningToDate(moment(dateQuery), (err, data) => {
				return this.buildResponse(err, res, data)
			})
		} else {
			model.getAllForToday((err, data) => {
				return this.buildResponse(err, res, data)
			})
		}
	}

	get (req, res, next) {
		model.get((err, data) => {
			return this.buildResponse(err, res, data)
		})
	}

}

module.exports = new FilmScreeningController