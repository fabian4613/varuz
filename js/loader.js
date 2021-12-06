const loader = document.querySelector('.lds-dual-ring')
const main = document.querySelectorAll('.main')[0]
const main2 = document.querySelectorAll('.main')[1]
const main3 = document.querySelectorAll('.main')[2]
const main4 = document.querySelectorAll('.main')[3]
const main5 = document.querySelectorAll('.main')[4]
const body = document.querySelector('.bg_body')

function init() {
    /*Carga de loader de inicio y transicion-delay a la web*/
    setTimeout(() => {
        loader.style.opacity = 0;
        loader.style.display = 'none';

        main.style.display = 'block';
        main2.style.display = 'block';
        main3.style.display = 'block';
        main4.style.display = 'block';
        main5.style.display = 'block';

        /*Se agrega background porque se elimino para el fondo del loader*/
        body.style.backgroundImage = "url('/img/background.png')";
        /*Se agrega background porque se elimino para el fondo del loader. Fin*/

        /*Efecto opacity, hecho rapido*/
        setTimeout(() => (main.style.opacity = 0.9)
            (main2.style.opacity = 1), 50);
        setTimeout(() => (main3.style.opacity = 1)
            (main4.style.opacity = 1), 50);
        setTimeout(() => (main5.style.opacity = 1), 50);
    }, 4000);
    /*Efecto opacity, hecho rapido. Fin.*/

}
/*Carga de loader de inicio y transicion-delay a la web. Fin.*/
init();