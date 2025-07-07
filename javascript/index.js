function iniciarJuego() {
  let usuario = eleccionUsuario();
  let maquina = eleccionMaquina();
  let resultado = quienEsElGanador()
  mostrarResultados(usuario, maquina, resultado);
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
    return "Empate";
  } else if (usuario == "piedra" && maquina == "papel") {
    return "Perdiste";
  } else if (usuario == "piedra" && maquina == "tijera") {
    return "Ganaste";
  } else if (usuario == "papel" && maquina == "tijera") {
    return "Perdiste";
  } else if (usuario == "papel" && maquina == "piedra") {
    return "Ganaste";
  } else if (usuario == "tijera" && maquina == "piedra") {
    return "Perdiste";
  } else if (usuario == "tijera" && maquina == "papel") {
    return "Ganaste";
  }
}

function mostrarResultados(usuario, maquina, resultado) {
  document.getElementById("divResultados").innerHTML = `
  <h1>Resultados</h1>
  <p>Usuario escogio ${usuario}</p>
  <p>Maquina escogio ${maquina}</p>
  <p>RESULTADO ES ${resultado}</p>
  `;
}
