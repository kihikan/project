/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

const movieDB = {
    movies: [
        "Логан ",
        "Лига справедливости ",
        "Ла-ла лэнд ",
        "Скотт Пилигрим против... ",
        "Одержимость "
    ]
};

//Задача 1
const reklama = document.querySelector(".promo__adv");
reklama.remove();


// Задача 2 

//Способ 1
const ganr = document.querySelector(".promo__genre");
ganr.textContent = "ДРАМА";

// //Способ 2
// const ganrDrama = document.createElement("div");
// ganrDrama.classList.add("promo__genre");
// ganrDrama.textContent = "ДРАМА";
// ganr.replaceWith(ganrDrama);

//Задача 3

const promoContent = document.querySelector(".promo__content");

const promoBG = promoContent.querySelector(".promo__bg");

promoBG.style.cssText = `height: 360px; 
background: url(img/bg.jpg) center center/cover no-repeat; 
background-position: top;
padding: 107px 0 0 61px;`;

//Задача 4

const filmy = document.querySelectorAll(".promo__interactive-item");

movieDB.movies.sort();

for ( let i = 0; i < movieDB.movies.length; i++)
{
    //movieDB.movies[i] = (i+1) + " " + movieDB.movies[i];
    filmy[i].textContent = (i+1) + " " + movieDB.movies[i];
}
 