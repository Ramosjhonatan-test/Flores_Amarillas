const poema = "Yudith, en este día de la amistad, te deseo alegría y felicidad🎉. Que la vida te regale sueños por alcanzar✨. y siempre encuentres razones para sonreír y amar❤️✨.";
const poemaElement = document.getElementById("poema");
const palabras = poema.split(""); // Dividir en letras
let index = 0;

function mostrarLetra() {
    if (index < palabras.length) {
        // Si la letra es un punto, agregar un salto de línea
        if (palabras[index] === '.') {
            poemaElement.innerHTML += palabras[index] + "<br>"; // Agregar punto y salto de línea
        } else {
            poemaElement.innerHTML += palabras[index]; // Agregar letra
        }
        poemaElement.style.opacity = 1; // Hacer visible el texto
        index++;
        setTimeout(mostrarLetra, 50); // Espera medio segundo entre letras
    }
}

mostrarLetra();
