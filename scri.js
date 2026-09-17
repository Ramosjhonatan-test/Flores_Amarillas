const poema = "Hoy es 21 de septiembre,|y todos hablan de amor;|pero yo solo puedo pensar en lo nuestro,|porque cada día que pasamos juntos es el más lindo,|el mejor regalo que me da la vida.||Cuando te siento cerca de mí,|todo el peso que cargo desaparece por completo.|El mundo se vuelve ligero y en paz,|porque a tu lado encuentro mi calma.||Eres mi fuerza y mi felicidad,|y hoy te aseguro con el corazón,|que el amor de este Jhonatan es solo para ti,|hoy, mañana y siempre.";

const poemaElement = document.getElementById("poema");

// Colores para cada párrafo
const colores = [
  "#ffd580",  // Párrafo 1: dorado cálido
  "#ffb3a7",  // Párrafo 2: coral suave
  "#b8d4ff"   // Párrafo 3: azul claro
];

// Separar en párrafos por "||"
const parrafos = poema.split("||");
let parrafoActual = 0;
let caracterActual = 0;
let htmlAcumulado = "";

function mostrarCaracter() {
  if (parrafoActual >= parrafos.length) return;

  const parrafo = parrafos[parrafoActual];
  const color = colores[parrafoActual % colores.length];

  if (caracterActual === 0) {
    htmlAcumulado += `<p class="poema-parrafo" style="color:${color}">`;
  }

  if (caracterActual < parrafo.length) {
    const char = parrafo[caracterActual];
    if (char === "|") {
      htmlAcumulado += "<br>";
    } else {
      htmlAcumulado += char;
    }
    caracterActual++;
  } else {
    htmlAcumulado += "</p>";
    parrafoActual++;
    caracterActual = 0;
  }

  poemaElement.innerHTML = htmlAcumulado;
  poemaElement.style.opacity = 1;
  poemaElement.scrollTop = poemaElement.scrollHeight;

  setTimeout(mostrarCaracter, 28);
}

mostrarCaracter();
