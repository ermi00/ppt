let usuarioEleccion = null;
let imgUsuarioEleccion = document.getElementById("imgUsuarioEleccion");
let imgMaquinaEleccion = document.getElementById("imgMaquinaEleccion");
let divElecciones = document.getElementById("divElecciones");
let botonIniciar = document.getElementById("botonIniciar");
let botonReiniciar = document.getElementById("botonReiniciar");
let sonidoBotones = new Audio("assets/clickButton.mp3");
let winnerSong = new Audio("assets/winner.mp3");
let loserSong = new Audio("assets/loser.mp3");
let empateSong = new Audio("assets/empate.mp3");
let errorSound = new Audio("assets/errorSound.mp3");
divElecciones.style.display = "none";
botonReiniciar.style.display = "none";

function iniciarJuego() {
  if (!usuarioEleccion) {
    errorSound.play();
    alert("¡Selecciona una opción primero!");
    return;
  }
  let usuario = eleccionUsuario();
  let maquina = eleccionMaquina();
  let resultado = quienEsElGanador(usuario, maquina);
  mostrarResultados(usuario, maquina, resultado);
  mostrarResultadosConsola(usuario, maquina, resultado);
  cambiarURL(usuario, maquina);
  botonReiniciar.style.display = "block";
  divElecciones.style.display = "flex ";

  if (resultado == "Ganaste") {
    winnerSong.play();
    document.getElementById("divResultados").innerHTML = `
  <h1 style="color: green;">${resultado.toUpperCase()}</h1>
  <img class="imgGif" src="assets/calacaBailando.gif" alt="calacaBailando">
  `;
  } else if (resultado == "Perdiste") {
    loserSong.play();
    document.getElementById("divResultados").innerHTML = `
  <h1 style="color: red;">${resultado.toUpperCase()}</h1>
  <img class="imgGif" src="assets/marioSad.gif" alt="marioSad">
  `;
  } else if (resultado == "Empate") {
    empateSong.play();
    document.getElementById("divResultados").innerHTML = `
  <h1 style="color: yellow;">${resultado.toUpperCase()}</h1>
  <img class="imgGif" src="assets/L.gif" alt="marioSad">
  `;
  }

  botonIniciar.style.display = "none";
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
  <h1>${resultado.toLocaleUpperCase()}</h1>
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
  sonidoBotones.play();
}

function botonPapel() {
  console.log("papel fue clickeada");
  usuarioEleccion = "papel";
  sonidoBotones.play();
}

function botonTijera() {
  console.log("tijera fue clickeada");
  usuarioEleccion = "tijera";
  sonidoBotones.play();
}

function cambiarURL(usuario, maquina) {
  if (usuario == maquina) {
    imgUsuarioEleccion.src = `assets/${usuario}Icono.png`;
    imgMaquinaEleccion.src = `assets/${maquina}Icono.png`;
  } else if (usuario == "piedra" && maquina == "papel") {
    imgUsuarioEleccion.src = "assets/piedraIcono.png";
    imgMaquinaEleccion.src = "assets/papelIcono.png";
  } else if (usuario == "piedra" && maquina == "tijera") {
    imgUsuarioEleccion.src = "assets/piedraIcono.png";
    imgMaquinaEleccion.src = "assets/tijeraIcono.png";
  } else if (usuario == "papel" && maquina == "tijera") {
    imgUsuarioEleccion.src = "assets/papelIcono.png";
    imgMaquinaEleccion.src = "assets/tijeraIcono.png";
  } else if (usuario == "papel" && maquina == "piedra") {
    imgUsuarioEleccion.src = "assets/papelIcono.png";
    imgMaquinaEleccion.src = "assets/piedraIcono.png";
  } else if (usuario == "tijera" && maquina == "piedra") {
    imgUsuarioEleccion.src = "assets/tijeraIcono.png";
    imgMaquinaEleccion.src = "assets/piedraIcono.png";
  } else if (usuario == "tijera" && maquina == "papel") {
    imgUsuarioEleccion.src = "assets/tijeraIcono.png";
    imgMaquinaEleccion.src = "assets/papelIcono.png";
  }
}

function reiniciarJuego() {
  window.location.reload();
}
