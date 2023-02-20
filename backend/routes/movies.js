const express = require('express');
const router = express.Router();
const Movie = require('../models/movie');

// Route pour récupérer tous les films
router.get('/', (req, res) => {
  Movie.find({})
    .then(movies => {
      res.json(movies);
    })
    .catch(err => {
      console.error(err);
      res.status(500).send('Erreur serveur');
    });
});

module.exports = router;
