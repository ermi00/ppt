function iniciarJuego() {
  usuario = prompt("Elige piedra, papel o tijera");
  maquina = eleccionMaquina();
  quienEsElGanador(usuario, maquina);
}

function eleccionMaquina() {
  let eleccion = Math.floor(Math.random() * 3) + 1;
  switch (eleccion) {
    case 1:
      return "piedra";
      break;
    case 2:
      return "papel";
      break;
    case 3:
      return "tijera";
      break;
  }
}

function quienEsElGanador(usuario, maquina) {
  if (usuario == maquina) {
    console.log("Empate");
  } else if (usuario == "piedra" && maquina == "papel") {
    console.log("Perdiste");
  } else if (usuario == "piedra" && maquina == "tijera") {
    console.log("Ganaste");
  } else if (usuario == "papel" && maquina == "tijera") {
    console.log("Perdiste");
  } else if (usuario == "papel" && maquina == "piedra") {
    console.log("Ganaste");
  } else if (usuario == "tijera" && maquina == "piedra") {
    console.log("Perdiste");
  } else if (usuario == "tijera" && maquina == "papel") {
    console.log("Ganaste");
  }
}
