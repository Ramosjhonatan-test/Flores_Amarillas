const loader = document.getElementById("sunflower-loader");

if (loader) {
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const loadingTime = reduceMotion ? 200 : 2850;

  window.setTimeout(() => {
    loader.classList.add("is-done");
  }, loadingTime);
}