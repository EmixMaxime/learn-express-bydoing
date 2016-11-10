const pg = require('../pg')

class FilmScreening {

    async getAllForToday () {
        const result = await pg.query('SELECT * FROM film_screening')
        return result.rows
    }
}

module.exports = FilmScreening