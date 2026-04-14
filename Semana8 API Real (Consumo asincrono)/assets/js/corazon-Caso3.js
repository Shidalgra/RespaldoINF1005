$(document).ready(function() {
    
    // Al hacer clic en el botón de acción
    $("#btn-publicaciones").click(function() {
        
        // Referencias a elementos del DOM
        const contenedor = $("#contenedor-noticias");
        const loader = $("#loading");
        
        // 1. Limpiar contenedor previo (.empty)
        contenedor.empty();
        
        // 2. Mostrar mensaje de carga
        loader.fadeIn();
        
        // 3. Realizar el FETCH a la API
        fetch("https://jsonplaceholder.typicode.com/posts")
            .then(response => {
                // Verificar si la respuesta es exitosa
                if (!response.ok) throw new Error("No se pudo conectar con el servidor.");
                return response.json();
            })
            .then(data => {
                // Ocultar loader al recibir datos
                loader.fadeOut();
                
                // 4. Recorrer el array de publicaciones (limitamos a 12 para el ejemplo)
                data.slice(0, 12).forEach(post => {
                    // Inyección dinámica usando Template Strings
                    contenedor.append(`
                        <div class="card-noticia">
                            <h3>${post.title}</h3>
                            <p>${post.body}</p>
                        </div>
                    `);
                });
            })
            .catch(error => {
                // 5. Manejo de Errores (Mensaje amigable)
                loader.hide();
                console.error("Error detectado:", error);
                contenedor.html(`
                    <div style="grid-column: 1/-1; text-align: center; color: #d63031;">
                        <strong>¡Ups! Algo salió mal:</strong> ${error.message}
                    </div>
                `);
            });
    });
});