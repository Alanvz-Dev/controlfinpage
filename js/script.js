document.addEventListener("DOMContentLoaded", function () {
  const items = document.querySelectorAll(".modulo-item");
  let triggered = false;

  function isInView(element) {
    const rect = element.getBoundingClientRect();
    return rect.top < window.innerHeight;
  }

  function triggerAnimation() {
    if (!triggered && isInView(items[0])) {
      triggered = true;
      items.forEach((item, index) => {
        setTimeout(() => {
          item.classList.add("visible");
        }, index * 1000); // 1 segundo entre cada uno
      });
    }
  }

  window.addEventListener("scroll", triggerAnimation);
  triggerAnimation(); // por si ya está visible al cargar
});
console.log("script cargado correctamente");
