//Variables globales
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
    var objUsuario = cuentas.find(obj => {return obj.usuario === usuarioIngresado.value});
    if(objUsuario){ 
      if( usuarioIngresado.value == objUsuario.usuario && constraseñaIngresada.value == objUsuario.contraseña ){
        objUsuario = (({usuario, nombre, saldo}) => ({usuario, nombre, saldo}))(objUsuario); 
        objUsuario.saldo = JSON.parse(localStorage.getItem(usuarioIngresado.value));
        localStorage.setItem("user" , JSON.stringify(objUsuario));
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
