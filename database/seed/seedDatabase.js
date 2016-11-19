const Faker = require('Faker')
const pg = require('../../src/pg')
const SQL = require('sql-template-strings')
const moment = require('moment')
const fs = require('fs')
const path = require('path');

// flags.defineString('format', 'query', 'Query or CSV')
var argv = require('minimist')(process.argv.slice(2));
const type = argv.type || 'query'

const filmSeed = require('./filmSeed')
const film = new filmSeed()
const roomSeed = require('./roomSeed')
const room = new roomSeed()

const seedings = new Map()
seedings.set(film, 5)
seedings.set(room, 5)

function parseValues (data, fields) {
	let values = ''

	fields.forEach(field => {
		if (typeof data[field] === 'number') { // If is a number, let it with his type
			values += data[field] + ','
		} else {
			values += ` '${data[field]}',`
		}
	})
	values = values.substring(0, values.length - 1) // Delete the last character (here the last ,)

	return values
}

seedings.forEach((numberOfSeed, instanceOfSeeding) => {

	console.log('Insert into ', instanceOfSeeding.table)
	const datas = instanceOfSeeding.building(numberOfSeed)
	let writtable = fs.createWriteStream(path.resolve(__dirname, `../csv/${instanceOfSeeding.table}.csv`))


	datas.forEach(data => {
		const fields = Object.keys(data)

		if (type === 'query') {
			const query = `
				INSERT INTO ${instanceOfSeeding.table} ( ${fields.join(',')} )
				values ( ${parseValues(data, fields)} )
			`
			return pg.query(query)
		}

		if (type === 'csv') {
			writtable.write(parseValues(data, fields))
			writtable.write("\n")
		}
	})
})



