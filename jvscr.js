"use strict";




// function start()
// {
//     numberOfFilms = prompt("Skolko filmov vi uge posmotreli ?", "");

//     while (numberOfFilms =="" || numberOfFilms==null || isNaN(numberOfFilms))
//     {
//         numberOfFilms = prompt("Skolko filmov vi uge posmotreli ?", "");
//     }
//   
// }
// start();

let numberOfFilms;
const personalMovieDB = {
    count: numberOfFilms,   
    movies: {},
    actors: {}, 
    genres: [], 
    privat: true,
    
    start: function(){       
        numberOfFilms = prompt("Skolko filmov vi uge posmotreli ?", "");
        
        while (numberOfFilms =="" || numberOfFilms==null || isNaN(numberOfFilms))
        {
            numberOfFilms = prompt("Skolko filmov vi uge posmotreli ?", "");
        }
        personalMovieDB.count = numberOfFilms;
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

    writeYouGenres: function(){  
        for (let i=1; i <= 3; i++)
        {
            personalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i}`,"" );
            while (personalMovieDB.genres[i - 1] == null || personalMovieDB.genres[i - 1] == "" )
            {
                personalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i}`,"" );
            }
        }
        personalMovieDB.genres.forEach(ganr => console.log(`Любимый жанр ${personalMovieDB.genres.indexOf(ganr)+ 1} это ${ganr}`));
    },

    toggleVisibleMyDB: function (){
        personalMovieDB.privat == true ?  personalMovieDB.privat = false : personalMovieDB.privat =true; //tenarny operator epta
    }

};

//Вызовы функций из personalMovieDB

personalMovieDB.start();
personalMovieDB.rememberMyFilms();
personalMovieDB.writeYouGenres();
personalMovieDB.detectPersonalLevel();
personalMovieDB.toggleVisibleMyDB();
personalMovieDB.showMyDB(personalMovieDB.privat);

//////////////////////////////////////////////////



// function rememberMyFilms()
// {
    
//     for (let i = 0; i < 2; i++)
//     {   
//     const lastFilm = prompt("Odin iz poslednih prosmotrennyh filmov ?", ""),
//           lastFilmOcenka = prompt("Vo skolko ocenite ego ?","");

//      if(lastFilm != null && lastFilmOcenka != null && lastFilm != "" && lastFilmOcenka != "" && lastFilm.length < 50)
//         {
//           personalMovieDB.movies[lastFilm] = lastFilmOcenka;
//         }
//     else
//         {
//          i--;
//         }
//     } 
// }
//rememberMyFilms();


// function detectPersonalLevel()
// {
//     if (personalMovieDB.start < 10)
//     {
//         console.log("Malo filmov smotrite");
//     }
//     else if (personalMovieDB.start >=10 && personalMovieDB.start <30)
//     {
//         console.log("Vi klassichesky zritel");
//     } 
//     else if (personalMovieDB.start >=30)
//     {
//         console.log("Vi klassichesky zritel");
//     } 
//     else 
//     {
//         console.log("Oshibka");
//     }
// }
//detectPersonalLevel();


// function showMyDB(hidden)
// { 
//     if (!hidden)
//     {
//         console.log(personalMovieDB);
//     } 
// }
//showMyDB(personalMovieDB.privat);

// function writeYouGenres()
// {  
//     for (let i=1; i <= 3; i++)
//     {
//        personalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i}`,"" );
//     }
// }
//writeYouGenres();

// function toggleVisibleMyDB()
// {
//     if (personalMovieDB.privat)
//     {
//         personalMovieDB.privat = false;
//     }

//     else 
//     {
//         personalMovieDB.privat = true;
//     }
// }
//toggleVisibleMyDB();

//console.log(personalMovieDB);
