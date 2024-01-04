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

const mostrarResultadoRonda = (mensaje) => {
    const resultadoRondaElement = document.getElementById("resultadoRonda");
    resultadoRondaElement.innerHTML = mensaje;
};

const guardarResultadoLocalStorage = (resultado) => {
    let resultadosGuardados = JSON.parse(localStorage.getItem("resultados")) || [];
    resultadosGuardados.push(resultado);
    localStorage.setItem("resultados", JSON.stringify(resultadosGuardados));
};

const jugarRonda = async () => {
    let eleccionJugador = document.getElementById("opcionJugador").value.toLowerCase();

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

        let resultadoRonda = "";

        if (eleccionJugador === eleccionBot) {
            resultadoRonda = `<p>${resultados.empate}</p>`;
        } else if (
            (eleccionJugador === "piedra" && eleccionBot === "tijera") ||
            (eleccionJugador === "papel" && eleccionBot === "piedra") ||
            (eleccionJugador === "tijera" && eleccionBot === "papel")
        ) {
            resultadoRonda = `<p>${resultados.victoria}</p>`;
        } else {
            resultadoRonda = `<p>${resultados.derrota}</p>`;
        }

        mostrarResultadoRonda(resultadoRonda);
        mostrarResultado("<p>---------------resultado----------------</p>");

        guardarResultadoLocalStorage(resultadoRonda);
    } else {
        mostrarResultado("<p>Elige una opción válida: piedra, papel o tijera</p>");
    }
};
