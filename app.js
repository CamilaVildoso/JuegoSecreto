let numerosSecreto = 0;
let intentos = 1; 
let listaDeNumeroSorteados = [];
let numeroMaximo = 10;


function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento); //ya no va en comillas dentro porque ahora es una variable 
    elementoHTML.innerHTML = texto;
}


function verificarIntento(){
    let numeroDeUsuario = parseInt(document.getElementById( "valorUsuario" ).value) ;
    
    if(numeroDeUsuario == numerosSecreto){
        asignarTextoElemento("p", `Le achuntaste, bien ahi crack en ${intentos} ${(intentos === 1)? "vez" : "veces"}`);
        document.getElementById("reiniciar").removeAttribute("disabled");
    } else {
        if (numeroDeUsuario > numerosSecreto){
            asignarTextoElemento("p","sigue intentando, es menor");
        } else {
            asignarTextoElemento ("p", "sigue intentando, es mayor");
    }
} intentos++;
limpieza();
}


function limpieza(){
    document.querySelector(`#valorUsuario`).value = " ";
}


function generarNumeroSecreto() {
    let numeroGenerado =  Math.floor(Math.random()*numeroMaximo)+1;

    console.log(numeroGenerado);
    console.log(listaDeNumeroSorteados);

    //si ya sorteamos todos los números
    if(listaDeNumeroSorteados.length == numeroMaximo){
       asignarTextoElemento("p", "Ya se sortearon todos los números posibles");
    } else {

        if(listaDeNumeroSorteados.includes(numeroGenerado)){
            return generarNumeroSecreto();
        } else {
            listaDeNumeroSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }
}

function condicionesDeInicio(){
    asignarTextoElemento("h1" , "Adivinando con Camila");
    asignarTextoElemento("p" , `Indica un número del 1 al ${numeroMaximo}`); 
    numerosSecreto = generarNumeroSecreto(); 
    intentos = 1;
}

function reiniciar (){
    limpieza();
    condicionesDeInicio();
    document.querySelector("#reiniciar").setAttribute("disabled" , "true");
}

condicionesDeInicio();