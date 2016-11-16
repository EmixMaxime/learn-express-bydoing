const Faker = require('Faker')
const pg = require('../../src/pg')
const SQL = require('sql-template-strings')
const moment = require('moment')


const filmSeed = require('./filmSeed')
const film = new filmSeed()
const roomSeed = require('./roomSeed')
const room = new roomSeed()

const seedings = new Map()
seedings.set(film, 5)
seedings.set(room, 5)

seedings.forEach((numberOfSeed, instanceOfSeeding) => {
	console.log('Insert into ', instanceOfSeeding.table)
	const datas = instanceOfSeeding.building(numberOfSeed)
	datas.forEach(data => {
		const fields = Object.keys(data)

		let values = ''
		fields.forEach(field => {
			if (typeof data[field] === 'number') { // If is a number, let it with his type
				values += data[field] + ','
			} else {
				values += ` '${data[field]}',`
			}
		})

		values = values.substring(0, values.length - 1) // Delete the last character (here the last ,)

		const query = `
			INSERT INTO ${instanceOfSeeding.table} ( ${fields.join(',')} )
			values ( ${values} )
		`
		pg.query(query)
	})
})



