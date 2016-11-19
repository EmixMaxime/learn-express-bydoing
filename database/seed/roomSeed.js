const Faker = require('Faker')

const random = (min, max) => {
	let number = 0
	while (number === 0) number = Math.floor(Math.random() * (max - min + 1) + min)
	return number
}

function Room () {
	this.table = "room"
	this.minPlaces = 100
	this.maxPlaces = 300
}

Room.prototype.base = function () {
	return {
		number: Faker.Lorem.words(1)[0],
		places: random(this.minPlaces, this.maxPlaces)
	}
}

Room.prototype.building = function (number = 2) {
	let rooms = []

	for (let i = 0; i < number; i++) {
		const room = this.base()
		rooms.push(room)
	}

	return rooms
}

module.exports = Room
