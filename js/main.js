const opciones = ["piedra", "papel", "tijera"];

const opcionRandom = () => opciones[Math.floor(Math.random() * 3)];

const resultados = {
    empate: "Empate :o",
    victoria: "Ganaste :)",
    derrota: "Te ganó un bot :(",
};

const mostrarResultado = (mensaje) => {
    const resultadoElement = document.getElementById("resultado");
    resultadoElement.innerHTML += mensaje;
};

const jugarRonda = async () => {
    let eleccionJugador = prompt(
        "Elige piedra, papel o tijera (si te arrepentiste pon 'salir')"
    ).toLowerCase();

        if (eleccionJugador === "salir") {
            jugar = false;
            mostrarResultado("<p>Hasta luego</p>");
            return;
        }

        if (opciones.includes(eleccionJugador)) {
            let eleccionBot = opcionRandom();

            const mensaje = `
                <p>Tu elegiste: ${eleccionJugador}</p>
                <p>El Bot eligió: ${eleccionBot}</p>
            `;

            mostrarResultado(mensaje);

            if (eleccionJugador === eleccionBot) {
                mostrarResultado(`<p>${resultados.empate}</p>`);
            } else if (
                (eleccionJugador === "piedra" && eleccionBot === "tijera") ||
                (eleccionJugador === "papel" && eleccionBot === "piedra") ||
                (eleccionJugador === "tijera" && eleccionBot === "papel")
            ) {
                mostrarResultado(`<p>${resultados.victoria}</p>`);
            } else {
                mostrarResultado(`<p>${resultados.derrota}</p>`);
            }

            mostrarResultado("<p>---------------resultado----------------</p>");
        } else {
            mostrarResultado("<p>Elige una opción válida: piedra, papel o tijera</p>");
        }
    };


const jugar = async () => {
    let jugar = true;

    while (jugar) {
        await jugarRonda();
    }
};

const iniciarJuego = () => {
    mostrarResultado("<p>¡Comienza el juego!</p>");
    jugar();
};

