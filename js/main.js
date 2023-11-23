let opciones = ["piedra", "papel", "tijera"];

function ppt () {
    let jugar = true;

    while (jugar){
        let eleccionJugador = prompt("Elige piedra, papel o tijera (si te arrepentiste pone 'salir')").toLowerCase();

        if (eleccionJugador === 'salir'){
            jugar = false;
            console.log("hasta luego")
            break;
        }

        let eleccionBot = opciones[Math.floor(Math.random() * 3)];
            
        console.log("Tu elegiste: " + eleccionJugador);
        console.log("El Bot eligió: " + eleccionBot);
        
        if (eleccionJugador === eleccionBot) {
                console.log("Empate :o");
            } else if (
                (eleccionJugador === "piedra" && eleccionBot === "tijera") ||
                (eleccionJugador === "papel" && eleccionBot === "piedra") ||
                (eleccionJugador === "tijera" && eleccionBot === "papel")
            ) {
                console.log("Ganaste :)");
            } else {
                console.log("Te gano un bot :(");
            }
    }
}
ppt ();


