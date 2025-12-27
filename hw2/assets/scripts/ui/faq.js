export function initFaqAccordion(rootEl) {
  const items = rootEl.querySelectorAll(".faq-item");

  items.forEach((item) => {
    const btn = item.querySelector(".faq-question");
    const answer = item.querySelector(".faq-answer");
    if (!btn || !answer) return;

    btn.addEventListener("click", () => {
      // чтобы открывался только один:
      items.forEach((other) => {
        if (other === item) return;
        const a = other.querySelector(".faq-answer");
        if (a) a.hidden = true;
      });

      answer.hidden = !answer.hidden;
    });
  });
}
