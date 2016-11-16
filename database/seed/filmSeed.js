const Faker = require('Faker')

const random = (max) => {
	let number = 0
	while (number === 0) number = Math.floor(Math.random () * max + 1)
	return number
}

function Film () {
	this.table = 'film'
	this.date = new Date()
	this.build = ['future', 'past']

	this.maxDiffDay = 7
}

Film.prototype.nowDate = function () {
	return this.date.toLocaleDateString()
}

Film.prototype.future = function () {
	const date = new Date()
	date.setDate(this.date.getDate() + random(this.maxDiffDay))
	return { date_release: date.toLocaleDateString() }
}

Film.prototype.past = function () {
	const date = new Date()
	date.setDate(this.date.getDate() - random(this.maxDiffDay))
	return { date_release: date.toLocaleDateString() }
}

Film.prototype.base = function () {
	return {
    	title: Faker.Lorem.sentence(),
    	description: Faker.Lorem.sentence()  + Faker.Lorem.sentence()
	}
}

Film.prototype.building = function () {
	let films = []

	this.build.forEach(build => {
		const changing = this[build]()
		const base = this.base()
		const object = Object.assign({}, base, changing)
		films.push(object)
	})

	return films
}

module.exports = Film