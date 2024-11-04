#include <iostream>
#include <vector>
#include <ctime>
#include <cstdlib>
#include <algorithm>

std::vector<std::string> opciones = {
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
};

std::vector<std::string> usadas;

std::string generarOpcion() {
    if (usadas.size() == opciones.size()) {
        return "No hay más opciones";
    }

    // Inicializar la semilla aleatoria
    std::srand(static_cast<unsigned int>(std::time(0)));
    
    int index;
    do {
        index = std::rand() % opciones.size();
    } while (std::find(usadas.begin(), usadas.end(), opciones[index]) != usadas.end());

    usadas.push_back(opciones[index]);
    return opciones[index];
}

int main() {
    std::cout << "Content-type: text/html\n\n"; // Tipo de contenido
    std::cout << "<html><body>";
    std::cout << generarOpcion(); // Llama a la función y muestra la opción generada
    std::cout << "</body></html>";
    return 0;
}
