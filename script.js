onload = () => {
    document.body.classList.remove("container");
  };

const musica = document.getElementById("musica-fondo");

if (musica) {
  const iniciarMusica = () => {
    musica.play().catch(() => {});
  };

  iniciarMusica();
  document.addEventListener("pointerdown", iniciarMusica, { once: true });
  document.addEventListener("keydown", iniciarMusica, { once: true });
}