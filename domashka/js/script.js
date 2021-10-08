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

const adv = document.querySelectorAll(".promo__adv img"),
      poster = document.querySelector(".promo__bg"),
      genre = poster.querySelector(".promo__genre"),
      movieList = document.querySelector(".promo__interactive-list");
      ;


adv.forEach(item => {
    item.remove();
});


genre.textContent = "драма";

poster.style.backgroundImage = 'url("img/bg.jpg")';


function dobavitFilmyNaGlav(){
  
    movieDB.movies.forEach((item,i) =>             ////// Снизу Задание 5 сортировка по алфавиту
    {                                             ////////
       movieDB.movies[i] =  item.toUpperCase();   /////
    });                                          //////
    
    movieDB.movies.sort();
    
    movieList.innerHTML = "";  

    movieDB.movies.forEach((film, i) => {
        movieList.innerHTML += `
        <li class="promo__interactive-item">${i+1} ${film.length > 21 ? film.slice(0,10)+"..." : film} 
            <div class="delete"></div>
        </li>`;
    });
}

dobavitFilmyNaGlav();

///////////////////
/* Задания на урок:

1) Реализовать функционал, что после заполнения формы и нажатия кнопки "Подтвердить" - 
новый фильм добавляется в список. Страница не должна перезагружаться.
Новый фильм должен добавляться в movieDB.movies.
Для получения доступа к значению input - обращаемся к нему как input.value;
P.S. Здесь есть несколько вариантов решения задачи, принимается любой, но рабочий.

2) Если название фильма больше, чем 21 символ - обрезать его и добавить три точки

3) При клике на мусорную корзину - элемент будет удаляться из списка (сложно)

4) Если в форме стоит галочка "Сделать любимым" - в консоль вывести сообщение: 
"Добавляем любимый фильм"

5) Фильмы должны быть отсортированы по алфавиту */

let chckBXVar = false;
const dobavit = document.querySelector(".add"),
      filmUser = dobavit.querySelector(".adding__input"),
      knopkaDobavit = dobavit.querySelector("button"),
      checkBxLove = dobavit.querySelector(".yes").previousElementSibling;

let knopkaUdalit = document.querySelectorAll(".delete");
    




knopkaDobavit.addEventListener('click', (e) => {
    e.preventDefault();
    //Задание 2 изменяет число символов и в базе
    // if (filmUser.value.length > 21)
    // {
    //     filmUser.value = filmUser.value.slice(0,10)+ "...";
    // }
        
    movieDB.movies.push(filmUser.value);
    dobavitFilmyNaGlav();
    if(chckBXVar){console.log(filmUser.value); }
    console.log(movieDB.movies);
});


    //Задание 3
 
movieList.addEventListener("mouseenter", () =>{
    knopkaUdalit = document.querySelectorAll(".delete");
    knopkaUdalit.forEach((item,i) =>{
        item.onclick = function()  {
            movieDB.movies.splice(i,1);
            dobavitFilmyNaGlav();
            console.log(movieDB.movies);
            }; 
        });
});

//Задание 4
    
checkBxLove.addEventListener("click",()=>{
        
    chckBXVar ? chckBXVar = false : chckBXVar = true;
    console.log(chckBXVar);
    });

    
