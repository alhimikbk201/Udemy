let numberOfFilms = +prompt('Сколько фильмов Вы уже посмотрели?', '');

let personalMovieDB = {
  
  count: numberOfFilms,
  movies: {

  },
  actors: {

  },
  genres: [],
  privat: false


};

const OneLostfilms1 = prompt('Один из последних просмотренных фильмов?', ''),
 OneLostfilms2 = prompt('Один из последних просмотренных фильмов?', ''),

 CostValue1 = prompt('На сколько оцените его?', ''),
 CostValue2 = prompt('На сколько оцените его?', '');

personalMovieDB.movies[OneLostfilms1] = CostValue1;
personalMovieDB.movies[OneLostfilms2] = CostValue2;

console.log(personalMovieDB);