let msjLogingIncorrecto = document.getElementById("msjErrorLoging");
let usuarioIngresado = document.getElementById("inputUsuario");
let constraseñaIngresada = document.getElementById("inputContraseña");
let btnIngreso = document.getElementById("inicio")


document.addEventListener("DOMContentLoaded",function(){
    msjLogingIncorrecto.style.visibility = "hidden";
    usuarioIngresado.focus();
})

btnIngreso.addEventListener('click', (e) =>{
    e.preventDefault();
    //Validar si usuario existe
    if(!(localStorage.getItem(usuarioIngresado.value) === null)){ 
      let usuarioAlmacenado = JSON.parse(localStorage.getItem(usuarioIngresado.value));      
      //validar credenciales
      if( usuarioIngresado.value == usuarioAlmacenado.usuario && constraseñaIngresada.value == usuarioAlmacenado.contraseña ){
        localStorage.setItem("user" , JSON.stringify(usuarioAlmacenado));
        window.location.href = "./profile.html";
      }
      else{
        usuarioIngresado.value = "";
        constraseñaIngresada.value = "";
        usuarioIngresado.focus();
        mensajeError();
      }
    }
    else{
      usuarioIngresado.value = "";
      constraseñaIngresada.value = "";
      usuarioIngresado.focus();
      mensajeError();
    }
})

function mensajeError(){
  msjLogingIncorrecto.style.visibility = "visible";
  let intervalo = setInterval(evento,3000);

  function evento(){
        msjLogingIncorrecto.style.visibility = "hidden";
        clearInterval(intervalo);
  }
}
