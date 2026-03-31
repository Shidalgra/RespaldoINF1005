// ESPERAR A QUE EL DOM ESTÉ LISTO (Implementación oficial)
$(document).ready(function() {
    // 1. Efectos de visibilidad (Mostramos lo que pide el cronograma)
    $("#btn-aparecer").click(function() {
        $("#lista-jquery").slideDown("slow"); // Efecto de persiana
    });

    $("#btn-ocultar").click(function() {
        $("#lista-jquery").slideUp("fast");
    });

    // 2. Manipulación de Clases CSS (Interacción dinámica)
    $(".item").click(function() {
        // toggleClass alterna la clase 'destacado' definida en el CSS
        $(this).toggleClass("destacado"); 
    });
});
