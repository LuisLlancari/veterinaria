function saludar() {
    alert("hola querida mascota");
}

function presentarse(){
    alert("te saludo");
}

const botonsaludo = document.getElementById("saludo")
botonsaludo.addEventListener("click" ,saludar);