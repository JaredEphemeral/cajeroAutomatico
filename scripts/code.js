let msjLogingIncorrecto = document.getElementById("msjErrorLoging");
let usuarioIngresado = document.getElementById("inputUsuario");
let constraseñaIngresada = document.getElementById("inputContraseña");

let btnIngreso = document.getElementById("inicio")


document.addEventListener("DOMContentLoaded",function(){
    msjLogingIncorrecto.style.display = "none";
})


btnIngreso.addEventListener('click', (e) =>{
    e.preventDefault();
    msjLogingIncorrecto.style.display = "initial";

    //Validar si usuario existe

    //validar credenciales
    if( usuarioIngresado.value == usuarioAlmacenado.user && constraseñaIngresada.value == usuarioAlmacenado.pass ){
      //  window.location.href = "./profile.html";
    }
    else{
       msjLogingIncorrecto.style.display = "initial";
       let intervalo = setInterval(evento,3000);

       function evento(){
            msjLogingIncorrecto.style.display = "none";
            clearInterval(intervalo);
       }
    }
})