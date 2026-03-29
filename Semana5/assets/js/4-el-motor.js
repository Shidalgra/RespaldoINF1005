// --- 1. CLASES Y HERENCIA (POO) ---
class Usuario { // Definición de la clase base (el molde principal)
  #password; // Propiedad PRIVADA: el símbolo '#' impide que se acceda desde fuera de la clase

  constructor(nombre, pass) { // Método que se ejecuta al crear un "new Usuario"
    this.nombre = nombre; // Asigna el nombre al objeto actual
    this.#password = pass; // Guarda el password de forma segura (privada)
    this.rol = "Estandar"; // Define un valor por defecto para todos los usuarios
  }

  // Método para generar el HTML de cada usuario (Usa Template Literals)
  obtenerFicha() { 
    return `<div class="card">
                <h3>${this.nombre.toUpperCase()}</h3> <p>Rango: ${this.rol}</p>
            </div>`; // Retorna un string con formato HTML
  }
}

// HERENCIA: Administrador extiende todas las capacidades de Usuario
class Administrador extends Usuario { 
  constructor(nombre, pass) { 
    super(nombre, pass); // SUPER: Llama al constructor del padre (Usuario) para inicializar nombre/pass
    this.rol = "ADMINISTRADOR"; // Sobrescribe el rol heredado
    this.permisos = ["Lectura", "Escritura", "Borrado"]; // Propiedad exclusiva de esta clase
  }

  // SOBRECARGA DE MÉTODOS: Reemplaza el método del padre por uno específico para Admin
  obtenerFicha() { 
    return `<div class="card admin-card">
                <h3>${this.nombre} (ROOT)</h3> <p>Permisos: ${this.permisos.join(", ")}</p> </div>`;
  }
}

// --- 2. ÁMBITO Y ARRAYS ---
const baseDeDatos = []; // Array Global: Vive fuera de las funciones, accesible desde cualquier parte

// --- 3. MANEJO DE ERRORES (Try-Catch-Finally) ---
function registrarNuevo() { 
  let log = document.getElementById("log-mensajes"); // Captura el área de mensajes en el HTML (DOM)
  log.classList.remove("error-critico"); // Limpia estilos de error previos

  try { // BLOQUE TRY: "Intenta" ejecutar este código, si algo falla salta al catch
    let nom = document.getElementById("nombre").value; // Captura el texto del input nombre
    let psw = document.getElementById("pass").value; // Captura el texto del input password
    let tipo = document.getElementById("tipo").value; // Captura la opción del select (estándar/admin)

    // CLÁUSULA THROW: Generamos nuestros propios errores manualmente
    if (!nom || !psw) 
      throw new Error("¡CAMPOS VACÍOS! El sistema requiere credenciales."); 
    
    if (psw.length < 4) 
      throw new Error("PASSWORD INSEGURO. Mínimo 4 caracteres.");

    let nuevoUser; // Variable de ámbito local (vive solo dentro de registrarNuevo)
    
    if (tipo === "admin") {
      nuevoUser = new Administrador(nom, psw); // Instancia la clase hija
    } else {
      nuevoUser = new Usuario(nom, psw); // Instancia la clase padre
    }

    // AGREGAR AL ARRAY: Metemos el objeto recién creado a la lista global
    baseDeDatos.push(nuevoUser); 
    log.innerText = `[EXITO]: ${nom} registrado correctamente.`; // Mensaje de confirmación

    renderizar(); // Llama a la función que actualiza la pantalla
    
  } catch (error) { // BLOQUE CATCH: Se activa solo si hubo un 'throw' o un error de JS
    log.innerText = `[ERROR DE SEGURIDAD]: ${error.message}`; // Muestra el mensaje del error capturado
    log.classList.add("error-critico"); // Cambia el color visual a rojo (CSS)
    
  } finally { // BLOQUE FINALLY: Se ejecuta SIEMPRE, haya error o no
    // Útil para limpiar la interfaz o cerrar conexiones
    document.getElementById("nombre").value = ""; 
    document.getElementById("pass").value = ""; 
  }
}

// --- 4. FUNCIONES Y ESTRUCTURAS DE CONTROL ---
function renderizar() { 
  let display = document.getElementById("lista-usuarios"); // Ubica el contenedor en el HTML
  display.innerHTML = ""; // Borra el contenido actual para no duplicar datos

  // Bucle forEach: Recorre cada objeto dentro del Array global
  baseDeDatos.forEach((user) => { 
    // Inyecta el HTML que devuelve el método obtenerFicha() de cada objeto
    display.innerHTML += user.obtenerFicha(); 
  });
}
