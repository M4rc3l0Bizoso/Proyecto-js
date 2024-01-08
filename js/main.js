
const opciones = ["piedra", "papel", "tijera"];

const opcionRandom = () => opciones[Math.floor(Math.random() * 3)];

const resultados = {
    empate: "Empate :o",
    victoria: "Ganaste :)",
    derrota: "Te ganó un bot :(",
};

const mostrarResultado = (mensaje, resultadoRonda) => {
    Swal.fire({
        html: mensaje,
        position: 'center',
        showConfirmButton: false,
        timer: 2000,
        didClose: () => {
            mostrarResultadoRonda(resultadoRonda);
        },
        customClass: {
            popup: 'elecciones',
            content:resultadoRonda.toLowerCase(),
        },
    });
};

const mostrarResultadoRonda = (mensaje) => {
    Swal.fire({
        html: mensaje,
        position: 'center',
        showConfirmButton: false,
        timer: 2000,
        customClass: {
            popup: 'resultado',
        }
    });
};

const mostrarError = (mensaje) => {
    Swal.fire({
        icon: 'error',
        title: 'Error',
        html: mensaje,
        position: 'center',
        showConfirmButton: true,
        customClass: {
            popup: 'error',
        }
        
    });
};

const guardarResultadoLocalStorage = (resultado) => {
    let resultadosGuardados = JSON.parse(localStorage.getItem("resultados")) || [];
    resultadosGuardados.push(resultado);
    localStorage.setItem("resultados", JSON.stringify(resultadosGuardados));
};

const jugarRonda = () => {
    let eleccionJugador = document.getElementById("opcionJugador").value.toLowerCase();

    if (eleccionJugador === "salir") {
        mostrarResultado("<p>Hasta luego</p>", "");
        return;
    }

    if (opciones.includes(eleccionJugador)) {
        let eleccionBot = opcionRandom();
        let resultadoRonda = ""; 

        const mensaje = `
            <p>Tu elegiste: ${eleccionJugador}</p>
            <p>El Bot eligió: ${eleccionBot}</p>
        `;

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

        mostrarResultado(mensaje, resultadoRonda);
        guardarResultadoLocalStorage(resultadoRonda);
    } else {
        mostrarError("Elige una opción válida: piedra, papel o tijera");
    }
};
