
//zadanie 1
const numberOfFilms = +prompt("Skolko filmov vi uge posmotreli ?", "");
//console.log(numberOfFilms);
///////////////////////////////

//zadanie 2
const personalMovieDB = {
    count: numberOfFilms, 
    movies: {}, 
    actors: {}, 
    genres: [], 
    privat: false
};
/////////////////////////////

//zadanie 3
/*let lastFilm = prompt("Odin iz poslednih prosmotrennyh filmov ?");
let lastFilmOcenka = prompt("Vo skolko ocenite ego ?");
personalMovieDB["movies"][lastFilm] = lastFilmOcenka;
console.log(personalMovieDB);*/
const lastFilm = prompt("Odin iz poslednih prosmotrennyh filmov ?", ""),
      lastFilmOcenka = prompt("Vo skolko ocenite ego ?",""),
      lastFilm2 = prompt("Odin iz poslednih prosmotrennyh filmov ?", ""),
      lastFilmOcenka2 = prompt("Vo skolko ocenite ego ?", "");


personalMovieDB.movies[lastFilm] = lastFilmOcenka;
personalMovieDB.movies[lastFilm2] = lastFilmOcenka2;
console.log(personalMovieDB.movies);



