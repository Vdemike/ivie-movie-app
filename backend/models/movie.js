const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema({
  title: String,
  overview: String,
  release_date: Date,
  poster_path: String,
  vote_average: Number,
  category: [String]
});

module.exports = mongoose.model('Movie', movieSchema);