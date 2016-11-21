const express = require('express')
const router = express.Router()
const filmScreeningController = require('../controllers/filmScreeningController')

// Les routes : 
// - une route "/" qui affiche tous les films qui sont dispo cette semaine. (de ojrd jusqu'au dimanche!).
// - une route "/:film" qui affiche LE film avec toutes les séances pour la semaine.

router.get('/', filmScreeningController.index)

module.exports = router