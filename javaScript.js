"use strict"

const semaforo = document.getElementById("semaforo")
let idInterval

const deixarVermelho = () => semaforo.src = "img/vermelho.png"

const deixarAmarelo = () => semaforo.src = "img/amarelo.png"

const deixarVerde = () => semaforo.src = "img/verde.png"

function automatico() {
    deixarVermelho()
    setTimeout(() => {
        deixarAmarelo()
        setTimeout(() => {
             deixarVerde()
           setTimeout(() => {
              automatico() 
           }, 700); 
        }, 700);
    }, 700);
}

// Eventos

document.getElementById("vermelho")
.addEventListener("click", deixarVermelho)

document.getElementById("amarelo")
.addEventListener("click", deixarAmarelo)

document.getElementById("verde")
.addEventListener("click", deixarVerde)

document.getElementById("automatico")
.addEventListener("click", automatico)