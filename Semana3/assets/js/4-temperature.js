let temperaturas = [22, 25, 36, 30, 24]; // Datos del sensor

console.log("--- Reporte de Sensores ---");

for (let i = 0; i < temperaturas.length; i++) {
  let t = temperaturas[i];

  if (t > 35) {
    console.error(`Alerta: Temperatura de ${t}°C detectada en sensor ${i + 1}`);
  } else {
    console.log(`Sensor ${i + 1}: ${t}°C - Estado OK`);
  }
}
