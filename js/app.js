'use strict';
let numberOfFilms; 

  
  //numberOfFilms = prompt('Сколько фильмов Вы уже посмотрели?', '');


function Start() {
  while(numberOfFilms =='' || numberOfFilms == null || numberOfFilms.length > 50 || isNaN(numberOfFilms)) {
    numberOfFilms = +prompt('Сколько фильмов Вы уже посмотрели?', '');
  }; 
}; 
Start();
let personalMovieDB = {
  
  count: numberOfFilms,
  movies: {

  },
  actors: {

  },
  genres: [],
  privat: false


};

for(let i = 0; i < 2; i++) {
  
  const OneLostfilms1 = prompt('Один из последних просмотренных фильмов?', '');
  const CostValue1 = prompt('На сколько оцените его?', '');
  
  if(OneLostfilms1 !== null && OneLostfilms1 !== '' && OneLostfilms1.length < 50 && CostValue1 !== null && CostValue1 !=='' && CostValue1.length < 50) {
    personalMovieDB.movies[OneLostfilms1] = CostValue1;
    console.log('yes')
} else {
    console.log('error')
    i--;
}
};

if(personalMovieDB.count < 10) {
  alert("Просмотренно довольно мало фильмов");
} else if(personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
   alert("Вы классический зритель");
} else if(personalMovieDB.count >= 30) {
  alert("Вы киноман");
} else {
  alert("Произошла ошибка");
}


console.log(personalMovieDB);
