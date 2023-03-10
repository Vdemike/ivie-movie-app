const axios = require('axios');
const mongoose = require('mongoose');
const Movie = require('./models/movie');
const { getGenresFromIds } = require('./functions/movie_category');

const api_key = 'd37d3e4ad93eaefbc2c174c17d90eb9d';

const max_page = 50;


const saveMovies = (page) => {
  if (page > max_page) {
    console.log(`Saved ${max_page * 20} movies in total.`);
    return;
  }

  axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${api_key}&language=en-US&page=${page}`)
    .then(response => {
      const movies = response.data.results;

      movies.forEach(movie => {
        const newMovie = new Movie({
          title: movie.title,
          overview: movie.overview,
          release_date: movie.release_date,
          poster_path: movie.poster_path,
          vote_average: movie.vote_average,
          category: getGenresFromIds(movie.genre_ids)
        });

        Movie.findOne({ title: newMovie.title }, (err, movieFound) => {
          if (err) {
            console.log(`Error searching for movie "${newMovie.title}":`, err);
            return;
          }

          if (movieFound) {
            console.log(`Movie "${newMovie.title}" already saved, skipping...`);
          } else {
            newMovie.save()
              .then(() => console.log(`Movie "${newMovie.title}" saved`))
              .catch(err => console.log(`Error saving movie "${newMovie.title}":`, err));
          }
        });
      });

      saveMovies(page + 1);
    })
    .catch(err => console.error(`Error fetching movies from TMDb API:`, err));
};

module.exports = saveMovies;


