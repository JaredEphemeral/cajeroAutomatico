let msjLogingIncorrecto = document.getElementById("msjErrorLoging");
let usuarioIngresado = document.getElementById("inputUsuario");
let constraseñaIngresada = document.getElementById("inputContraseña");
let btnIngreso = document.getElementById("inicio")


document.addEventListener("DOMContentLoaded",function(){
    msjLogingIncorrecto.style.display = "none";
})

btnIngreso.addEventListener('click', (e) =>{
    e.preventDefault();
    //Validar si usuario existe
    if(!(localStorage.getItem(usuarioIngresado.value) === null)){ 
      let usuarioAlmacenado = JSON.parse(localStorage.getItem(usuarioIngresado.value));      
      //validar credenciales
      if( usuarioIngresado.value == usuarioAlmacenado.usuario && constraseñaIngresada.value == usuarioAlmacenado.contraseña ){
        console.log("B");
      }
      else{
        mensajeError();
      }
    }
    else{
      mensajeError();
    }
})

function mensajeError(){
  msjLogingIncorrecto.style.display = "initial";
  let intervalo = setInterval(evento,3000);

  function evento(){
        msjLogingIncorrecto.style.display = "none";
        clearInterval(intervalo);
  }
}
