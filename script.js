onload = () => {
    document.body.classList.remove("container");
  };

const musica = document.getElementById("musica-fondo");

if (musica) {
  const iniciarMusica = () => {
    musica.play().catch(() => {});
  };

  iniciarMusica();
  window.addEventListener("load", iniciarMusica, { once: true });
  window.addEventListener("pageshow", iniciarMusica, { once: true });
  document.addEventListener("pointerdown", iniciarMusica, { once: true });
  document.addEventListener("keydown", iniciarMusica, { once: true });
}