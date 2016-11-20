// const express = require('express')
// const router = express.Router()

// const model = require('../../src/model/FilmScreening')
// const Model = new model()


// Les routes : 
// - une route "/" qui affiche tous les films qui sont dispo cette semaine. (de ojrd jusqu'au dimanche!).
// - une route "/:film" qui affiche LE film avec toutes les séances pour la semaine.


// router.get('/',  async (request, response) => {
//     const filmScreenings = await Model.getFilmScreeningForThisWeek()
//     return response.json(filmScreenings)
// })

// module.exports = router