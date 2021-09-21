"use strict";

const numberOfFilms = +prompt("Skolko filmov vi uge posmotreli ?", "");

const personalMovieDB = {
    count: numberOfFilms, 
    movies: {}, 
    actors: {}, 
    genres: [], 
    privat: false
};


for (let i = 0; i < 2; i++)
{   
    const lastFilm = prompt("Odin iz poslednih prosmotrennyh filmov ?", ""),
          lastFilmOcenka = prompt("Vo skolko ocenite ego ?","");

   
    if(lastFilm != null && lastFilmOcenka != null && lastFilm != "" && lastFilmOcenka != "" && lastFilm.length < 50)
    {
        personalMovieDB.movies[lastFilm] = lastFilmOcenka;
    }
    else
    {
        i--;
    }
    
}




if (personalMovieDB.count < 10)
{
    console.log("Malo filmov smotrite");
}
else if (personalMovieDB.count >=10 && personalMovieDB.count <30)
{
    console.log("Vi klassichesky zritel");
} 
else if (personalMovieDB.count >=30)
{
    console.log("Vi klassichesky zritel");
} 
else 
{
    console.log("Oshibka");
}


console.log(personalMovieDB);