// touchstart
// touchmove
// touchend
// touchenter
// touchleave
// touchcancel

window.addEventListener("DOMContentLoaded", ()=>{
    const box = document.querySelector(".box");

    box.addEventListener('touchstart', (e) =>{
        e.preventDefault();

        console.log("Touch Start");
        console.log(e.touches);
    });

    box.addEventListener('touchmove', (e) =>{
        e.preventDefault();

        console.log(e.targetTouches[0].pageX);
    });

    // box.addEventListener('touchend', (e) =>{
    //     e.preventDefault();

    //     console.log("Touch End");
    // });
});

//touches - пальцы на экране
//targetTouches
// changedTouches