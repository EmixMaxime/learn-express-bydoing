const Faker = require('Faker')
const pg = require('../src/pg')
const SQL = require('sql-template-strings')

function Film () {
	this.date = new Date(),
	this.build = ['future', 'past']
}

Film.prototype.nowDate = function () {
	return this.date.toLocaleDateString()
}

Film.prototype.future = function () {
	const date = new Date()
	date.setDate(this.date.getDate() + 2)
	return { date_release: date.toLocaleDateString() }
}

Film.prototype.past = function () {
	const date = new Date()
	date.setDate(this.date.getDate() - 2)
	return { date_release: date.toLocaleDateString() }
}

Film.prototype.base = function () {
	return {
    	title: Faker.Lorem.sentence(),
    	description: Faker.Lorem.sentence()  + Faker.Lorem.sentence()
	}
}

const film = new Film()
let filmData = []

film.build.forEach(build => {
	const changing = film[build]()
	const base = film.base()
	const object = Object.assign({}, base, changing)
	filmData.push(object)
})

filmData.forEach(data => {
	pg.query(SQL`
		INSERT INTO film (title, description, date_release)
		values(${data.title}, ${data.description}, ${data.date_release})	
	`)
})


