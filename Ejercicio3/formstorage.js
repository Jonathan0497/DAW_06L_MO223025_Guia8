var valor;

function init() {
    var seleccion = document.getElementById("seleccionar");
    if (seleccion.addEventListener) {
        seleccion.addEventListener("click", mostrar, false);
    } else if (seleccion.attachEvent) {
        seleccion.attachEvent("onclick", mostrar);
    }
}

function mostrar() {
    // Determinando la opción seleccionada
    var opcion = document.form.methods.options[document.form.methods.selectedIndex].value;
    switch (opcion) {
        case "api":
            // Utilizando la Api de Local Storage, podemos guardar y luego recuperar un valor 
            localStorage.setItem('bienvenida', 'Bienvenidos a localStorage con API de JavaScript');
            valor = localStorage.getItem('bienvenida');
            break;
        case "array":
            // Utilizar notación de matrices o arreglos
            localStorage['bienvenida'] = 'Bienvenidos, también podemos usar notación de matrices';
            valor = localStorage['bienvenida'];
            break;
        case "object":
            // También es válido utilizar notación de propiedades de objetos
            localStorage.bienvenida = 'Bienvenidos, igual podemos usarlo como propiedades de objeto';
            valor = localStorage.bienvenida;
            break;
        default:
            alert("Esta opción no existe");
            return; // Salir del método
    }

    var contenido = document.getElementById("content");
    contenido.innerHTML = "<p>Usando : <strong>" + opcion + "</strong> - " + valor + "</p>";
}

if (window.addEventListener) {
    window.addEventListener("load", init, false);
} else if (window.attachEvent) {
    window.attachEvent("onload", init);
}
