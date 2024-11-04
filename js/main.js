const opciones = [
    "Akali + Zed (wombo ninja)",
    "Akshan + Pyke (wombo invisible)",
    "Ashe + Mundo (los frenadores del infierno)",
    "Chino + Pantheon",
    "Darius + Sett (duo mascachapa)",
    "Graves + Teemo (wombo cegador)",
    "Kaisa + Cartitas",
    "Miss Fortune + Veigar (jaula infernal)",
    "Maokai + Teemo (wombo de cagadiñas)",
    "Morgana + Veigar",
    "Nautilus + Leona (wombo de stun infinito)",
    "Nocturne + Cartitas (wombo de ultis)",
    "Nocturne + Shen (wombo de ultis 2.0)",
    "Olaf + Mundo (duo de achazos al horto)",
    "Pantheon + Leona",
    "Seraphine + Sona (doble sona combo)",
    "Tahm + Yasuo",
    "Tahm + Zac (doble catapulta)",
    "Talon + Zed (wombo de asesinos)",
    "Tresh + Blitz (wombo de ganchos)",
    "Urgot + Singed (doble catapulta)",
    "Varus + Ashe (wombo ulti de flechas)",
    "Vexx + Neeko",
    "Xerath + Lux (castigadores del infierno)"
];

let clickCount = 0; // Contador de clics
let resultadosMostrados = []; // Array para almacenar los resultados mostrados

// Función para barajar el array
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]]; // Intercambiar elementos
    }
    return array;
}

// Barajar las opciones al inicio
shuffle(opciones);

document.getElementById('generateButton').addEventListener('click', function() {
    // Comprobar si ya se han mostrado todas las opciones
    if (clickCount < opciones.length) {
        // Incrementar el contador de clics
        clickCount++;

        // Añadir la opción correspondiente al array de resultados mostrados
        resultadosMostrados.push(opciones[clickCount - 1]);

        // Mostrar los resultados acumulados, cada uno en una nueva línea
        document.getElementById('result').innerHTML = resultadosMostrados.map((resultado, index) => `Opción ${index + 1}: ${resultado}`).join("<br>");
    } else {
        // Si se han mostrado todas las opciones, mostrar el mensaje
        document.getElementById('result').innerHTML = "No hay más opciones";
    }
});

// Manejo del botón resetear
document.getElementById('resetButton').addEventListener('click', function() {
    // Resetear el contador y los resultados
    clickCount = 0;
    resultadosMostrados = [];
    document.getElementById('result').innerHTML = ""; // Limpiar el contenedor de resultados
});
