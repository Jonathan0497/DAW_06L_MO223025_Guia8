// Verificar si el navegador utilizado posee soporte para usar localStorage.
// Si no lo es, advertir al usuario enviando una advertencia de no compatibilidad.
if (window.localStorage) {
    document.getElementById("isCompatibleMsg").style.display = 'block';
} else {
    document.getElementById("notCompatibleMsg").style.display = 'block';
}

// Obtener todos los elementos del documento que se requieren utilizando el modelo del DOM Nivel 2.
var storedTextContainer = document.getElementById("webStorageStoredText");
var inputBox = document.getElementById("webStorageInput");
var saveBtn = document.getElementById("webStorageSaveBtn");
var clearBtn = document.getElementById("clearWebStorage");

// Acceder al dato almacenado previamente con localStorage.
var storedText = localStorage.getItem('webStorageTestInput');

// Verificar si el dato almacenado en el objeto localStorage es nulo.
if (storedText) {
    storedTextContainer.innerHTML = "<strong>Dato cargado desde almacenamiento local:</strong> " + storedText;
    inputBox.value = storedText;
}

// Usamos el manejador de evento onclick sobre el botón Guardar para almacenar el dato ingresado hasta el momento en el objeto localStorage.
saveBtn.onclick = function() {
    var valueToSave = inputBox.value.replace(/<\/?[^>]+>/gi, '');  // Escapar contenido para prevenir inserción de HTML
    localStorage.setItem('webStorageTestInput', valueToSave);
    storedTextContainer.innerHTML = "Se ha almacenado correctamente '" + valueToSave + "'. Actualice la página para observar que el dato almacenado se muestra en el campo de formulario.";
}

// Borramos todo el contenido (clave y valor) almacenado en el objeto localStorage
clearBtn.onclick = function() {
    if (storedText) {
        localStorage.clear();
        inputBox.value = "";
        storedTextContainer.innerHTML = "Almacenamiento local liberado.";
    }
}
