const Faker = require('Faker')

/**
 * J'ai besoin des données de film, room et screening pour les assembler et ajouter une date.
 * Pour se faire :
 * Il faudrait garder toutes les données insérées en base (dans une variable dns seedDatabase) pour pouvoir les récupérer :
 * 
 */

function FilmScreening () {
	this.table = 'film_screening'
	this.needs = ['room', 'screening', 'film']
}

FilmScreening.prototype.building = function (number = 2, needData) {
	console.log('FilmScreening data : ', needData)
	return []
}

module.exports = FilmScreening