const pg = require('../pg')

class Film {

    async getActualFilm () {
        const result = await pg.query(`
            SELECT * FROM film
            WHERE date_release < NOW()
        `)
        return result.rows
    }
}

module.exports = Film