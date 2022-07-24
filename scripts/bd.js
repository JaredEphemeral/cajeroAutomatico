let cuentas = [
        {   nombre: "Jared", 
            usuario: "jared123",
            contraseña: "123",
            saldo: 200
    },
        {   nombre: "Krystel", 
            usuario: "kris123",
            contraseña: "123",
            saldo: 599.99 
    },
        {   nombre: "Andres", 
            usuario: "serdna",
            contraseña: "123",
            saldo: 750.01 
    }
];

document.addEventListener("DOMContentLoaded",function(){
    let id = 0;
    cuentas.forEach(element => {
        id ++;
        guardarEnLocal(id, element);
    });

    
})

function guardarEnLocal(id, elemento){
    if (! (localStorage.hasOwnProperty(id))){
        localStorage.setItem(id , JSON.stringify(elemento));
    }
}