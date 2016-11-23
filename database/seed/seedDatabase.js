process.env.NODE_ENV = 'test'

const Faker = require('Faker')
const pg = require('../../app/libs/pg')
const SQL = require('sql-template-strings')
const moment = require('moment')
const fs = require('fs')
const path = require('path');

var argv = require('minimist')(process.argv.slice(2));
const type = argv.type || 'query'

const filmSeed = require('./filmSeed')
const film = new filmSeed()

const roomSeed = require('./roomSeed')
const room = new roomSeed()

const screeningSeed = require('./screeningSeed')
const screening = new screeningSeed()

let filmScreening = require('./filmScreeningSeed')
filmScreening = new filmScreening()

const seedings = new Map()
seedings.set(film, 5)
seedings.set(room, 5)
seedings.set(screening, 5)
seedings.set(filmScreening, 2)

/**
 * 
 * 
 * @param {any} data
 * @param {any} fields
 * @returns
 */
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

let seededData = {
}

seedings.forEach((numberOfSeed, instanceOfSeeding) => {
	const tableName = instanceOfSeeding.table

	console.log('Insert into ', tableName)
	// Initialize data variable :
	seededData[tableName] = []
	const needData = []

	if (instanceOfSeeding.needs && instanceOfSeeding.needs.length > 0) {
		instanceOfSeeding.needs.forEach(need => {
			Object.keys(seededData).forEach(typeOfData => {
				if (typeOfData === need) {
					needData.push(seededData[typeOfData])
				}
			})
		})
	}

	const datas = instanceOfSeeding.building(numberOfSeed, needData) // Building data from class xxxSeed

	let writtable = fs.createWriteStream(path.resolve(__dirname, `../csv/${tableName}.csv`))

	datas.forEach(data => {
		const fields = Object.keys(data)

		seededData[tableName].push(data)

		if (type === 'query') {
			const query = `
				INSERT INTO ${tableName} ( ${fields.join(',')} )
				values ( ${parseValues(data, fields)} )
			`
			pg.query(query, (err, data) => {
				if (err) throw err
				console.log('Insert data')
			})

		} else if (type === 'csv') {
			writtable.write(parseValues(data, fields))
			writtable.write("\n")
		}
	})
})



