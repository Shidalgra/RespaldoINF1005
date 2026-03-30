// 1. Nuestra Base de Datos (Array de Objetos)
const claseIT = [
  { nombre: "Sergio", nota: 90, becado: true },
  { nombre: "Andrés", nota: 65, becado: false },
  { nombre: "Karla", nota: 98, becado: true },
  { nombre: "Pedro", nota: 55, becado: false },
];

function cargarReporte() {
  let tabla = document.getElementById("tabla-estudiantes");
  tabla.innerHTML = ""; // Limpiar pantalla

  // 2. Usamos un Bucle (Semana 3) para recorrer el Array (Semana 5)
  for (let i = 0; i < claseIT.length; i++) {
    let est = claseIT[i]; // Accedemos al OBJETO actual
    let estadoClase = est.nota >= 70 ? "aprobado" : "reprobado";

    // 3. Inyectamos los datos del objeto en el HTML
    tabla.innerHTML += `
            <div class="ficha-estudiante ${estadoClase}">
                <h3>${est.nombre}</h3>
                <p>Nota Final: ${est.nota}</p>
                <p>Estado: ${est.becado ? "Tiene Beca" : "Sin Beca"}</p>
            </div>
        `;
  }
}
