"use strict";

let numberOfFilms;


function start()
{
    numberOfFilms = prompt("Skolko filmov vi uge posmotreli ?", "");

    while (numberOfFilms =="" || numberOfFilms==null || isNaN(numberOfFilms))
    {
        numberOfFilms = prompt("Skolko filmov vi uge posmotreli ?", "");
    }
}

start();


const personalMovieDB = {
    count: numberOfFilms, 
    movies: {}, 
    actors: {}, 
    genres: [], 
    privat: false
};


function rememberMyFilms()
{
    
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
}

rememberMyFilms();


function detectPersonalLevel()
{
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
}

detectPersonalLevel();

function showMyDB()
{ 
    if (!personalMovieDB.privat)
    {
        console.log(personalMovieDB);
    } 
}

showMyDB();

function writeYouGenres()
{
    let genreCount = 1;
    
    for (let i=0; i < 3; i++)
    {
        let youGenre = prompt(`Ваш любимый жанр под номером ${genreCount}`,"" );
        if (youGenre == "" || youGenre == null || !isNaN(youGenre))
        {
           i--;
        }
        else
        {
            personalMovieDB.genres[i] = youGenre;
            genreCount++;
        }
    }
}

writeYouGenres();

//console.log(personalMovieDB);