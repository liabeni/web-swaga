function normalize(str) {
  return str.trim().toLowerCase();
}

export function readFilterState({ inputEl, filtersEls }) {
  const state = {
    query: inputEl.value,
    skill: "",
    format: "",
  };

  filtersEls.forEach((sel) => {
    if (sel.name === "skill") state.skill = sel.value;
    if (sel.name === "format") state.format = sel.value;
  });

  return state;
}

export function applyFilters(mentors, { query, skill, format }) {
  const q = normalize(query);

  return mentors.filter((m) => {
    const matchesQuery =
      !q || normalize(m.name).includes(q) || normalize(m.role).includes(q);

    const matchesSkill = !skill || m.skills.includes(skill);
    const matchesFormat = !format || m.format === format;

    return matchesQuery && matchesSkill && matchesFormat;
  });
}
