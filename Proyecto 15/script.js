var change = document.getElementById("Cambio-modo");
var cuerpo = document.querySelector("body");
var boton = document.querySelector("boton-oscuro");

var pantalla = document.getElementById("pantalla")

var elemento = document.querySelectorAll("butaca");

var solucion = document.getElementsByClassName("dineros");
var solu = document.getElementsByClassName("asiento");

var total;
var totalButacas = [];


function Modo(change) {

    if (change.innerHTML == 'toggle_on') {
        change.innerHTML = 'toggle_off';

        cuerpo.classList.add('modo-oscuro');
        pantalla.classList.add('modo-oscuro');
        // boton.classList.add('boton-oscuro');

    } else {
        change.innerHTML = 'toggle_on';
        cuerpo.classList.remove('modo-oscuro');
        pantalla.classList.remove('modo-oscuro');
        // boton.classList.remove('boton-oscuro');
    }

}


function SelButaca(elemento) {
    if(elemento.classList.contains('butacaReservada')){

    }

   else if (elemento.classList.contains('butacaSeleccionada')) {

        elemento.classList.remove('butacaSeleccionada');
        totalButacas.pop(elemento);

    } else {

        elemento.classList.add('butacaSeleccionada');
        totalButacas.push(elemento);
    }
    PrecioButacas();
}

var elemento = document.querySelectorAll(".butaca");
var numeroAleatorio1 = Math.floor(Math.random() * 20 + 1);
var numeroAleatorio2 = Math.floor(Math.random() * 20 + 1);
var numeroAleatorio3 = Math.floor(Math.random() * 20 + 1);
var numeroAleatorio4 = Math.floor(Math.random() * 20 + 1);



elemento[numeroAleatorio1].classList.add("butacaReservada");
elemento[numeroAleatorio2].classList.add("butacaReservada");
elemento[numeroAleatorio3].classList.add("butacaReservada");
elemento[numeroAleatorio4].classList.add("butacaReservada");





function PrecioButacas() {
    var precio = document.getElementById("Pelis").value;

    total = totalButacas.length * precio;
    solucion[0].innerHTML = total + "€";
    solu[0].innerHTML = totalButacas.length;
}

