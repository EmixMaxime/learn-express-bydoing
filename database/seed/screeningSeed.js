const Faker = require('Faker')
const moment = require('moment')

function Screening () {
	this.table = "screening"
	this.hours = ['14', '15', '16', '17', '18', '19', '20', '21', '22']
}

Screening.prototype.building = function (number = 2) {
	let screenings = this.hours.map(hour => {
		return {hour : moment(hour, 'HH').format('HH:mm:ss') }
	})

	return screenings
}

module.exports = Screening
