window.onscroll = function () {
    let posicion = window.pageYOffset || document.documentElement.scrollTop;

    let celular = document.getElementById('celular');
    let contenido = document.getElementById('contenido');

    celular.style.left = posicion * -0.1 + "px";
    contenido.style.left = posicion * 0.2 + "px";
}