const pg = require('../pg')

class Film {

    async getCurrentlyFilmAffiche () {
        const result = await pg.query(`
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

    async getAfficheFilmToDate (date) {
    	// TODO: tester si date est de type Date objet JS
    	const dateFormat = date.toLocaleDateString()
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
    	const result = await pg.query(sql)
    	return result.rows
    }
}

module.exports = Film