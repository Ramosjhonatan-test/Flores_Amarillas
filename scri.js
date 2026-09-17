const poema = "Llegó el 21 de septiembre,|trayendo consigo el brillo del sol;|y en cada flor amarilla|vive un destello de amor.||Tú me devuelves la calma,|Jhosselin, iluminas mi existir;|con solo ver tu sonrisa,|vuelvo, feliz, a vivir.||Eres mi eterna primavera,|mi alegría y mi ilusión;|por eso hoy, tu Jhonatan,|te entrega entero el corazón.";
const poemaElement = document.getElementById("poema");
const palabras = poema.split(""); // Dividir en letras
let index = 0;

function mostrarLetra() {
    if (index < palabras.length) {
        if (palabras[index] === '|') {
            poemaElement.innerHTML += "<br>";
        } else {
            poemaElement.innerHTML += palabras[index];
        }
        poemaElement.style.opacity = 1; // Hacer visible el texto
        index++;
        setTimeout(mostrarLetra, 28);
    }
}

mostrarLetra();
