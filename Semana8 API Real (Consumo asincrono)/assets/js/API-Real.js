// Espera a que todo el HTML esté cargado antes de ejecutar el script
$(document).ready(function () {
  // Escuchamos el evento CLICK del botón con id="btn-cargar"
  $("#btn-cargar").click(function () { ///////////////////////////////////////////////////////Event listener
    // Guardamos en variables los elementos del DOM que vamos a usar
    const contenedor = $("#tabla-usuarios"); // div donde se insertarán las tarjetas
    const loader = $("#loading"); // texto "Cargando datos..."

    // Mostrar loader y limpiar contenedor
    loader.show(); // Muestra el mensaje "Cargando datos..."
    contenedor.empty(); // Borra cualquier contenido previo (por si se presiona varias veces)

    // FETCH → Llamada a API externa (petición HTTP GET)
    fetch("https://jsonplaceholder.typicode.com/users")
      // Cuando el servidor responde…
      .then((response) => {
        // Si la respuesta NO fue exitosa (error 404, 500, etc.)
        if (!response.ok) throw new Error("Error en la red");

        // Convertimos la respuesta a formato JSON
        return response.json();
      })

      // Cuando ya tenemos el JSON convertido a objeto JS
      .then((data) => {
        loader.hide(); // Ocultamos el mensaje de "Cargando"

        // data es un ARRAY de usuarios → recorremos cada usuario
        data.forEach((user) => {
          // Insertamos una card dentro del contenedor usando template string
          contenedor.append(`
                        <div class="card-api">
                            <h3>${user.name}</h3> 
                            <p>${user.email}</p>
                            <small>Ciudad: ${user.address.city}</small>
                        </div>
                    `);
        });
      })

      // Si ocurre cualquier error en TODO el proceso anterior
      .catch((error) => {
        loader.hide(); // Ocultamos el loader si falla
        console.error("Hubo un problema:", error); // Mostramos error en consola

        // Mostramos mensaje visual al usuario
        contenedor.html(
          "<p style='color:red'>No se pudieron cargar los datos.</p>",
        );
      });
  });
});
