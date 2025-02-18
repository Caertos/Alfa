export function hoverHandler() {
  const cards = document.querySelectorAll(".containerCard");
  const isTouchDevice =
    "ontouchstart" in window || navigator.maxTouchPoints > 0;

  cards.forEach((card) => {
    if (isTouchDevice) {
      card.addEventListener("touchstart", (e) => {
        if (card.classList.contains("hovered")) {
          window.location.href = card.dataset.link;
        } else {
          e.preventDefault();
          card.classList.add("hovered");
        }
      });
    } else {
      card.addEventListener("click", () => {
        window.location.href = card.dataset.link;
      });
    }
  });
}
