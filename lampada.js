const turnOn = document.querySelector("#turnOn")
const turnOff = document.querySelector("#turnOff")
const lampada = document.getElementById("lampada")
const trocarLamp = document.getElementById("trocarLamp")

function ligarLamp() {
    lampada.src = "img/ligada.jpg"
    
}

function desligarLamp() {
    lampada.src = "img/desligada.jpg"
}

function quebrarLamp() {
    lampada.src = "img/quebrada.jpg"
    trocarLamp.classList.add("show")
    turnOn.classList.add("hide")
    turnOff.classList.add("hide")
}

function trocarLampada() {
    lampada.src = "img/desligada.jpg"
    trocarLamp.classList.remove("show")
    turnOn.classList.remove("hide")
    turnOff.classList.remove("hide")
}

turnOn.addEventListener("click", ligarLamp)
turnOff.addEventListener("click", desligarLamp)
lampada.addEventListener("dblclick", quebrarLamp)
trocarLamp.addEventListener("click", trocarLampada)