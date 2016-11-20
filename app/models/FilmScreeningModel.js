const pg = require('../libs/pg')
const moment = require('moment')

class FilmScreeningModel {

    getAllForToday () {
        const result = pg.query('SELECT * FROM film_screening')
        return result.rows
    }

    getFilmScreeningForThisWeek () {
    	const nextSunday = moment().day("Saturday")
    	return this.getFilmScreeningToDate(nextSunday)
    }

    getFilmScreeningToDate (date) {
    	// TODO: tester si date est de type momentjs ?
    	const dateFormat = date.format('YYYY-MM-DD')
    	const sql = `
			SELECT F.*, S.*  FROM film F
			INNER JOIN film_screening FS
			    ON FS.film_id = F.id
			INNER JOIN screening S
			    ON S.id = FS.screening_id
			WHERE FS.date >= now()::DATE
				AND FS.date <= '${dateFormat}'::DATE
			    AND S.hour > now()::TIME;
    	`
        /* Pourquoi avoir mit dateFormat en string ? Car il ne peut pas convertir des int en date... */
    	const result = pg.query(sql)
    	return result.rows
    }
}

module.exports = new FilmScreeningModel