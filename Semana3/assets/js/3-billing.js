//Facturación
let totalCosto = 0;             // Hacemos una variable que obtenga el resultado para mostrarlo al final
let cantidadProductos = 12;     // Agarramos 12 productos de ejemplo para aplicar el descuento
let precioUnitario = 1000;      // Le damos un precio al producto, este ejercicio es basico y lo vamos a hacer así

for (let i = 1; i <= cantidadProductos; i++) {      // Creamos el loop que recorra la variable dependiendo de la cantidad
  totalCosto += precioUnitario;                     // Agregamos y sumamos cada precio según el recorrido
}

if (cantidadProductos > 20) {                       // Aca le creamos una condición para aplicar el descuento
  totalCosto *= 0.8; // 20% descuento               // Calculo matemático    
} else if (cantidadProductos > 10) {                // Le creamos otra condición 
  totalCosto *= 0.9; // 10% descuento               // Y hacemos el calculo matemático
}

console.log(`Total final a pagar: ₡${totalCosto}`); // Mostramos en consola el resultado
