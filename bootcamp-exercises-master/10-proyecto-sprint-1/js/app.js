var estudiantes = [];

function obtenerListaEstudiantes() {
    return estudiantes
    
}

function agregarEstudiante(nombre, puntosTecnicos, puntosHse ) {

var estudiante= {
    nombre: prompt("Ingresa tu nombre"),
    puntosTecnicos: prompt("Ingresa tu punto tecnico"),
    puntosHse: prompt("Ingresa tu punto HSE")
    
   };

estudiantes.push (estudiante);
return estudiante;
    // TO DO: Preguntar al usuario por el nombre, puntos técnicos y puntos de HSE de un estudiante
    // Hint: El estudiante debe ser agregado a la lista de estudiantes
    // TO DO: Retornar el estudiante recientemente creado
    
}

function mostrar(estudiante) {
    // TO DO: Completar el template para que muestre las propiedades correctas del estudiante 
    var resultado = "";
    resultado += "<div class='row'>";
    resultado += "<div class='col m12'>";
    resultado += "<div class='card blue-grey darken-1'>";
    resultado += "<div class='card-content white-text'>";
    resultado += "<p><strong>Nombre:</strong> " + estudiante.nombre + "</p>";
    resultado += "<p><strong>Puntos Técnicos:</strong> " + estudiante.puntosTecnicos + "</p>";
    resultado += "<p><strong>Puntos HSE:</strong> " + estudiante.puntosHse + "</p>";
    resultado += "</div>";
    resultado += "</div>";
    resultado += "</div>";
    resultado += "</div>";
    return resultado;
}

function mostrarLista(estudiantes) {
var muestra = " ";
    for (var i in estudiantes) {
        muestra += mostrar(estudiantes[i]);
       
    }
     return muestra;
    // TO DO: Iterar la lista del estudiantes para devolverlos en el formato que usa la función mostrar(estudiante)
    // Retornar el template de todos los estudiantes
    
}

function buscar(nombre, estudiantes) {

for (var i in estudiantes) {
    if (nombre == estudiantes[i].nombre) {
    
    return estudiantes[i];
    }
}
    

    // TO DO: Buscar el nombre en la lista de estudiantes que se recibe por parámetros
    // Retornar el objeto del estudiante buscado
    // Nota: NO IMPORTA SI EL USUARIO ESCRIBE EL NOMBRE EN MAYÚSCULAS O MINÚSCULAS
    
}

function topTecnico(estudiantes) {
    // TO DO: Retornar el arreglo de estudiantes ordenado por puntaje técnico de mayor a menor
    return estudiantes.sort(function(a,b) {
        return b.puntosTecnicos-a.puntosTecnicos;
    });
}

function topHSE(estudiantes) {
    // TO DO: Retornar el arreglo de estudiantes ordenado por puntaje de HSE de mayor a menor
    return estudiantes.sort(function(a,b) {
        return b.puntosHse-a.puntosHse;
    });
}