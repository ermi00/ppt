let usuarioEleccion = null;
let imgUsuarioEleccion = document.getElementById("imgUsuarioEleccion");
let imgMaquinaEleccion = document.getElementById("imgMaquinaEleccion");
let divElecciones = document.getElementById("divElecciones")
divElecciones.style.display = 'none';

function iniciarJuego() {
  let usuario = eleccionUsuario();
  let maquina = eleccionMaquina();
  let resultado = quienEsElGanador(usuario, maquina);
  mostrarResultados(usuario, maquina, resultado);
  mostrarResultadosConsola(usuario, maquina, resultado);
  cambiarURL(usuario, maquina);
  divElecciones.style.display = 'flex ';
}

function eleccionUsuario() {
  return usuarioEleccion;
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

function mostrarResultadosConsola(usuario, maquina, resultado) {
  console.log(
    `
    Usuario -->  ${usuario}
    Maquina --> ${maquina}
    Resultado --> ${resultado}

    `
  );
}

function botonPiedra() {
  console.log("piedra fue clickeada");
  usuarioEleccion = "piedra";
}

function botonPapel() {
  console.log("papel fue clickeada");
  usuarioEleccion = "papel";
}

function botonTijera() {
  console.log("tijera fue clickeada");
  usuarioEleccion = "tijera";
}

function cambiarURL(usuario, maquina) {
  if (usuario == maquina) {
    imgUsuarioEleccion.src = `../assets/${usuario}Icono.png`
    imgMaquinaEleccion.src = `../assets/${maquina}Icono.png`
  } else if (usuario == "piedra" && maquina == "papel") {
    imgUsuarioEleccion.src = "../assets/piedraIcono.png";
    imgMaquinaEleccion.src = "../assets/papelIcono.png";
  } else if (usuario == "piedra" && maquina == "tijera") {
    imgUsuarioEleccion.src = "../assets/piedraIcono.png";
    imgMaquinaEleccion.src = "../assets/tijeraIcono.png";
  } else if (usuario == "papel" && maquina == "tijera") {
    imgUsuarioEleccion.src = "../assets/papelIcono.png";
    imgMaquinaEleccion.src = "../assets/tijeraIcono.png";
  } else if (usuario == "papel" && maquina == "piedra") {
    imgUsuarioEleccion.src = "../assets/papelIcono.png";
    imgMaquinaEleccion.src = "../assets/piedraIcono.png";
  } else if (usuario == "tijera" && maquina == "piedra") {
    imgUsuarioEleccion.src = "../assets/tijeraIcono.png";
    imgMaquinaEleccion.src = "../assets/piedraIcono.png";
  } else if (usuario == "tijera" && maquina == "papel") {
    imgUsuarioEleccion.src = "../assets/tijeraIcono.png";
    imgMaquinaEleccion.src = "../assets/papelIcono.png";
  }
}
