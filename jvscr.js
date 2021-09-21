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
    const lastFilm = prompt("Odin iz poslednih prosmotrennyh filmov ?", "");

    if(!lastFilm || lastFilm.length >50)
    {
        i--;
    }else if (lastFilm.length > 0)
    {
        const lastFilmOcenka = prompt("Vo skolko ocenite ego ?","");
        if(!lastFilmOcenka || lastFilmOcenka.length >50)
        {
            i--;
        }else if(lastFilmOcenka) {personalMovieDB.movies[lastFilm] = lastFilmOcenka;}
    }
}


if (personalMovieDB.count <10)
{
    alert("Malo filmov smotrite");
    console.log("Malo filmov smotrite");
}
else if (personalMovieDB.count >=10 && personalMovieDB.count <=30)
{
    alert("Vi klassichesky zritel");
    console.log("Vi klassichesky zritel");
} 
else 
{
    alert("Oshibka");
    console.log("Oshibka");
}


console.log(personalMovieDB);