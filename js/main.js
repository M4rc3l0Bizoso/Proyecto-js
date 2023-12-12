const opciones = ["piedra", "papel", "tijera"];

const opcionRandom = () => opciones [Math.floor(Math.random() * 3)];

const resultados = {
    empate: "Empate :o",
    victoria:"Ganaste :)",
    derrota: "Te gano un bot :("
};

const jugar = () => {
    let jugar = true;


    while (jugar){
        let eleccionJugador = prompt("Elige piedra, papel o tijera (si te arrepentiste pone 'salir')").toLowerCase();

        if (eleccionJugador === 'salir'){
            jugar = false;
            console.log("hasta luego")
            break;
        }


        if (opciones.includes(eleccionJugador)){
            let eleccionBot = opcionRandom();

        console.log("Tu elegiste: " + eleccionJugador);
        console.log("El Bot eligió: " + eleccionBot);
        
        if (eleccionJugador === eleccionBot) {
                console.log(resultados.empate);
            } else if (
                (eleccionJugador === "piedra" && eleccionBot === "tijera") ||
                (eleccionJugador === "papel" && eleccionBot === "piedra") ||
                (eleccionJugador === "tijera" && eleccionBot === "papel")
            ) {
                console.log(resultados.victoria);
            } else {
                console.log(resultados.derrota);
            } 
        }else{
                console.log("elige una opcion valida: piedra, papel o tijera");
            }
        
    }
};


jugar();


