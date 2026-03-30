
//Hacemos un arreglo de estudiantes que tienen un promedio
let listaEstudiantes = [
    { nombre: "Juan", promedio: 88 },
    { nombre: "Ana", promedio: 95 },
    { nombre: "Luis", promedio: 70 }
];

// Para hacer uso del arreglo hacemos la siguiente lógica para calcular quien es el ganador o la ganadora
let ganador = listaEstudiantes.reduce((mejor, actual) => {
    return actual.promedio > mejor.promedio ? actual : mejor;
});

// mostramos en consola quien es el ganador o la ganadora
console.log("Ganador: " + ganador.nombre);