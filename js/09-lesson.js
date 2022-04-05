const numberOfFilms = +prompt('How much movies did you see?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const a = prompt('One of last seen movies', '');
      b = prompt('Rate film', '');
      c = prompt('One of last seen movies', '');
      d = prompt('Rate film', '');

personalMovieDB.movies[a] = b;   
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);