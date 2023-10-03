var divState;
var myArrayObject = [];

function init() {
    console.log("Carga de la página finalizada.");

    if (!window.localStorage) {
        alert("El navegador no tiene soporte para HTML5 y almacenamiento local. Se recomienda actualizarlo.");
        return; 
    }
    console.log("El navegador soporta tanto localStorage como sessionStorage.");

    divState = document.getElementById("state");
    divState.style.display = 'block';
}

function save() {
    var myName = document.getElementById("name");
    var age = document.getElementById("age");
    var msg;

    try {
        localStorage.setItem("name", myName.value);
        localStorage.setItem("age", age.value);
        myName.value = "";
        age.value = "";
        msg = "Datos guardados en el localStorage.";
        console.log(msg);
        divState.innerHTML = "<p>" + msg + "</p>";
    }
    catch (e) {
        if (e.name === 'QuotaExceededError') {
            console.log("Error: Límite para almacenamiento local se ha alcanzado.");
        } else {
            console.log("Error: Guardando en el almacenamiento local.");
        }
    }
}
function obtain() {
    var msg = "Obteniendo el dato " + localStorage.key(0) + " y " +
        localStorage.key(1) + " desde el localStorage.";
    var myName = document.getElementById("name");
    var age = document.getElementById("age");
    console.log(msg);
    divState.innerHTML = "<p>" + msg + "</p>";
    myName.value = localStorage.getItem("name");
    age.value = localStorage.getItem("age");
}
function remove() {
    console.log("Removiendo dato del localStorage.");
    localStorage.removeItem("name");
    localStorage.removeItem("age");
}
function clearStorage() {
    divState.innerHTML = "";
    console.log("Borrando todo el contenido de localStorage.");
    localStorage.clear();
}
function saveComplexData() {
    console.log("Guardando datos complejos a localStorage.");
    var myName = document.getElementById("name");
    var age = document.getElementById("age");
    var personObject = new Object();
    personObject.name = myName.value;
    personObject.age = age.value;
    localStorage.setItem("person", JSON.stringify(personObject));
}
function restoreComplexData() {
    console.log("Restaurando datos complejos desde localStorage.");
    var myName = document.getElementById("name");
    var age = document.getElementById("age");
    var personObject = JSON.parse(localStorage.getItem("person"));
    myName.value = personObject.name;
    age.value = personObject.age;
    //Mostrar al usuario en el elemento DIV el contenido del objeto
    divState.innerHTML = "<p>Nombre: " + personObject.name + ", Edad: " +
        personObject.age + "</p>";
}
function saveArrayData() {
    var myName = document.getElementById("name");
    var myAge = document.getElementById("age");

    //Creando el arreglo con los datos
    var personObject1 = new Object();
    personObject1.name = myName.value;
    personObject1.age = parseInt(myAge.value);
    myArrayObject.push(personObject1);
    console.log("Guardando arreglo de datos en localStorage.");
    localStorage.setItem("persons", JSON.stringify(myArrayObject));
}
function restoreArrayData() {
    divState.innerHTML = "";
    console.log("Restaurando arreglo de datos desde localStorage.");
    var myArrayObject = JSON.parse(localStorage.getItem("persons"));
    for (var i = 0; i < myArrayObject.length; i++) {
        var personObject = myArrayObject[i];
        console.log("Nombre: " + personObject.name, "Edad: " +
            personObject.age);
        divState.innerHTML += "<p>Nombre: " + personObject.name + ", Edad: " +
            personObject.age + "</p>";
    }
}
if (window.addEventListener) {
    window.addEventListener("load", init, false);
}
else if (window.attachEvent) {
    window.attachEvent("onload", init)
}