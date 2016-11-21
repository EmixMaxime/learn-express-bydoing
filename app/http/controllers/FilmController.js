'use strict'
const model = require('../../models/FilmModel')
const Controller = require('./Controller')

class FilmController extends Controller {

	constructor () {
		super()
		this.buildResponse = this.buildResponse.bind(this)
		this.index = this.index.bind(this)
		this.get = this.get.bind(this)
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