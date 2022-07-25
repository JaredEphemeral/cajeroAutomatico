let usuarioLogeado = JSON.parse(localStorage.getItem("user"));
let acciones = document.getElementById("rowAcciones");
let movimientos = document.getElementById("rowMovimientos");
let btnDepositar = document.getElementById("btnDepositar");
let btnRetirar = document.getElementById("btnRetirar");
let ayuda = document.getElementById("ayuda");
let btnAccion = document.getElementById("aceptarAccion");
let btnCancelarAccion = document.getElementById("cancelarAccion");
let cuadroMensajes = document.getElementById("mensajes");
let parrafoMensajes = document.getElementById("parrafoMensaje");

const minCant = 10;
const maxCant = 990;
let banderaMovimiento = 0; //Si es 1 es Deposito, si es 2 es retiro

document.addEventListener("DOMContentLoaded",function(){
    n =  new Date();
    y = n.getFullYear();
    m = n.getMonth() + 1;
    d = n.getDate();
    document.getElementById('mensajeDia').innerHTML = "Saldo al día " + d + "/" + m + "/" + y + ":";
    document.getElementById('saldoUsuario').innerHTML = "$ " + (usuarioLogeado.saldo).toFixed(2) + " MXN";
    document.getElementById('bienvenida').innerHTML = "Bienvenid@ " + usuarioLogeado.nombre;
    movimientos.style.display = "none";
    acciones.style.display ="initial";
    cuadroMensajes.style.display ="initial";
    document.getElementById("inputCantidad").value = 0;

    cuadroMensajes.style.backgroundColor = 'green';
})

btnDepositar.addEventListener('click', (e) =>{
    acciones.style.display = "none";
    movimientos.style.display ="initial";
    ayuda.textContent = "Ingrese la cantidad a Depositar."
    banderaMovimiento = 1;
    document.getElementById("inputCantidad").focus();
})

btnRetirar.addEventListener('click', (e) =>{
    acciones.style.display = "none";
    movimientos.style.display ="initial";
    ayuda.textContent = "Ingrese la cantidad a Retirar."
    banderaMovimiento = 2;
    document.getElementById("inputCantidad").focus();
})

btnAccion.addEventListener('click', (e) =>{
    e.preventDefault();
    let cantMovimiento = Number(document.getElementById("inputCantidad").value);
    if(cantMovimiento > 0){
        if(validarMovimiento(cantMovimiento, Number(usuarioLogeado.saldo))){
            switch(banderaMovimiento){
                case 1:
                    usuarioLogeado.saldo = Number(usuarioLogeado.saldo) + cantMovimiento;
                    localStorage.setItem("user", JSON.stringify(usuarioLogeado));
                    localStorage.setItem(usuarioLogeado.usuario, JSON.stringify(usuarioLogeado));
                    document.getElementById('saldoUsuario').innerHTML = "$ " + (usuarioLogeado.saldo).toFixed(2) + " MXN";
                    movimientos.style.display ="none";
                    acciones.style.display ="initial";
                    parrafoMensajes.innerHTML = "Se han depositado " + cantMovimiento + " MXN a su cuenta exitosamente."
                    cuadroMensajes.style.backgroundColor = "green"
                    mensaje();
                    //Mensaje de deposito exitoso
                    break;
                case 2:
                    usuarioLogeado.saldo = Number(usuarioLogeado.saldo) - cantMovimiento;
                    localStorage.setItem("user", JSON.stringify(usuarioLogeado));
                    localStorage.setItem(usuarioLogeado.usuario, JSON.stringify(usuarioLogeado));
                    document.getElementById('saldoUsuario').innerHTML = "$ " + (usuarioLogeado.saldo).toFixed(2) + " MXN";
                    movimientos.style.display ="none";
                    acciones.style.display ="initial";
                    parrafoMensajes.innerHTML = "Se han retirado " + cantMovimiento + " MXN de su cuenta exitosamente."
                    cuadroMensajes.style.backgroundColor = "green"
                    mensaje();
                    //Mensaje de retiro exitoso
                    break;
            }
            document.getElementById("inputCantidad").value = 0;
        }
        else{
            
        }
    }
    else{
        document.getElementById("inputCantidad").value = 0;
        //Mensaje de negativos
    }
})

function btnCerrarSesion(){
    localStorage.removeItem("user");
    banderaMovimiento = 0;
    window.location.href= "./index.html";
    return true;
}

function validarMovimiento(cantidad, saldo){
    switch(banderaMovimiento){
        case 1:
            if( saldo + cantidad > 990){
                console.log("No se puede pasar de 990");
                return false;
            }
            break;
        case 2:
            if(saldo - cantidad < 10){
                console.log("No se puede bajar de 10");
                return false;
            }
            break;
    }
    return true;
}

function mensaje(){
    cuadroMensajes.style.display = "initial";
    let intervalo = setInterval(evento,3000);
  
    function evento(){
        cuadroMensajes.style.display = "none";
          clearInterval(intervalo);
    }
  }