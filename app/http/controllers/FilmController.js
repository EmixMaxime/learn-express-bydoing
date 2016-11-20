'use strict'
const model = require('../../models/FilmModel')

class FilmController {

	constructor () {
		this.buildResponse = this.buildResponse.bind(this)
		this.index = this.index.bind(this)
		this.get = this.get.bind(this)
	}

	/**
	 * @param  {Object|null} - error object
	 * @param  {Object} - response object
	 * @param  {Array|null}
	 * @return {Object}
	 */
	
	buildResponse (err, res, data) {
		res.status(err ? 503 : 200).json({
			error: err ? true : null,
			errorMessage: err ? err : null,
			data: data
		})
		return res
	}

	index (req, res, next) {
		model.get(null, (err, data) => {
			return this.buildResponse(err, res, data)
		})
	}

	get (req, res, next) {
		const title = req.params.title
		model.get(title, (err, data) => {
			return this.buildResponse(err, res, data)
		})
	}
}

module.exports = new FilmController