export function hoverHandler() {
  const cards = document.querySelectorAll(".card");
  const isTouchDevice =
    "ontouchstart" in window || navigator.maxTouchPoints > 0;

  cards.forEach((card) => {
    if (!isTouchDevice) {
      card.addEventListener("touchstart", (e) => {
        if (card.classList.contains("hovered")) {
          window.location.href = card.dataset.link;
        } else {
          e.preventDefault();
          card.classList.add("hovered");
          setTimeout(() => {
            card.classList.remove("hovered");
          }, 2000);
        }
      });
    } else {
      card.addEventListener("click", () => {
        window.location.href = card.dataset.link;
      });
    }
  });
}
