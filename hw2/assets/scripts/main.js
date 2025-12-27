import { mentors } from "./data/mentors.js";
import { renderMentors } from "./ui/renderMentors.js";
import { applyFilters, readFilterState } from "./ui/filters.js";
import { initFaqAccordion } from "./ui/faq.js";

function initMentorSearch() {
  const form = document.querySelector(".search-form");
  const input = document.querySelector(".search-form__input");
  const filters = Array.from(document.querySelectorAll(".filter"));
  const grid = document.querySelector(".mentor-grid");

  if (!form || !input || !grid) return;

  function update() {
    const state = readFilterState({ inputEl: input, filtersEls: filters });
    const filtered = applyFilters(mentors, state);
    renderMentors(grid, filtered);
  }

  update();

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    update();
  });

  input.addEventListener("input", update);

  filters.forEach((sel) => {
    sel.addEventListener("change", update);
  });

  const resetBtn = document.querySelector("#resetFilters");

  if (resetBtn) {
    resetBtn.addEventListener("click", () => {
      input.value = "";
      filters.forEach((sel) => {
        sel.selectedIndex = 0;
      });

      update();
    });
  }
}

function initFaq() {
  const faq = document.querySelector(".faq");
  if (!faq) return;
  initFaqAccordion(faq);
}

initMentorSearch();
initFaq();
