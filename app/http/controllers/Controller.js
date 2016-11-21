class Controller {
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
}

module.exports = Controller