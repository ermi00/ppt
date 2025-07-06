function iniciarJuego() {
  let usuario = eleccionUsuario();
  let maquina = eleccionMaquina();
  quienEsElGanador(usuario, maquina);
  mostrarResultados(usuario, maquina);
}

function eleccionUsuario() {
  let radioSeleccionado = document.formEleccionUsuario.eleccionUsuario.value;
  if (radioSeleccionado.lenght == 0) radioSeleccionado = "ninguno";
  return radioSeleccionado;
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

function mostrarResultados(usuario, maquina) {
  document.getElementById("divResultados").innerHTML = `
  <h1>Resultados</h1>
  <p>Usuario escogio ${usuario}</p>
  <p>Maquina escogio ${maquina}</p>
  `;
}
