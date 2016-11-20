const pg = require('../libs/pg')

class FilmModel {

    /**
    * Callback for sending data from the database
    * @callback sendingDataCallBack
    * @param {String} error
    * @param {Array} data
    */

    index () {

    }

    /**
    * Get film
    * @param {String|null} title - the title of the film, if it's null get all of films
    * @param {sendingDataCallBack} callback
    */

    get (title, callback) {
        const baseQuery = 'SELECT * FROM film'
        const query = baseQuery + ( title ? ' WHERE title = $1' : '')
        pg.query(query, title ? [title] : null, (err, result) => {
            if (err) return callback("Problem with database", null)
            return callback(null, result.rows)
        })
    }

    getCurrentlyFilmAffiche () {
        const result = pg.query(`
            SELECT
            	F.id, F.title, F.description, F.date_release
            FROM film F
            INNER JOIN film_screening FS
            	ON FS.film_id = F.id
            WHERE F.date_release < NOW()
            GROUP BY F.id
        `)
        return result.rows
    }
}

module.exports = new FilmModel