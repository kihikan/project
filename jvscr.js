"use strict";

const personalMovieDB = {
    count: 0,   
    movies: {},
    actors: {}, 
    genres: [], 
    privat: true,
    
    start: function(){       
        personalMovieDB.count = prompt("Skolko filmov vi uge posmotreli ?", "");
        
        while (personalMovieDB.count =="" || personalMovieDB.count==null || isNaN(personalMovieDB.count))
        {
            personalMovieDB.count = prompt("Skolko filmov vi uge posmotreli ?", "");
        }

    },

    rememberMyFilms: function(){
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
    },
    
    detectPersonalLevel: function (){
        if (personalMovieDB.count < 10)
        {
            console.log("Malo filmov smotrite");
        }
        else if (personalMovieDB.count >=10 && personalMovieDB.count < 30)
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
    },

    showMyDB: function(hidden){ 
        if (!hidden)
        {
            console.log("это вся база из-за фалсе в привате");
            console.log (personalMovieDB);
        } 
    },
    toggleVisibleMyDB: function (){
        if (personalMovieDB.privat)
        {
            personalMovieDB.privat = false;
        }
        else
        {
            personalMovieDB.privat = true;
        }
    },

    writeYouGenres: function(){  
        for (let i = 1; i < 2; i++)
        {
            // let genre = prompt(`Ваш любимый жанр под номером ${i}`,"" );
            // if(genre === "" || genre === null)
            // {
            //     console.log("Вы ввели некоректные данные");
            //     i--;
            // }
            // else
            // {
            //     personalMovieDB.genres[i - 1] = genre;
            // }
            let genres = prompt("Введите любимые жанры через запятую ","" );
            if(genres === "" || genres === null)
            {
                i--;
            }
            else
            {
                personalMovieDB.genres = genres.split(", ");
                personalMovieDB.genres.sort();
            }


        }
        personalMovieDB.genres.forEach((item, i) => {
            console.log(`Любимый жанр ${i+1} - это ${item}`)});

    }

};