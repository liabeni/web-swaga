function createMentorCard(mentor) {
  const card = document.createElement("article");
  card.className = "mentor-card";

  const img = document.createElement("img");
  img.className = "mentor-card__photo";
  img.src = mentor.photo;
  img.addEventListener("error", () => {
    img.src = "assets/images/mentor-placeholder.jpg";
  });
  img.alt = mentor.name;

  const name = document.createElement("h3");
  name.className = "mentor-card__name";
  name.textContent = mentor.name;

  const role = document.createElement("p");
  role.className = "mentor-card__role";
  role.textContent = mentor.role;

  const price = document.createElement("p");
  price.className = "mentor-card__price";
  price.textContent = `${mentor.pricePerHour.toLocaleString("ru-RU")} ₽ / час`;

  card.append(img, name, role, price);
  return card;
}

export function renderMentors(gridEl, list) {
  gridEl.innerHTML = "";

  if (!list.length) {
    const empty = document.createElement("p");
    empty.textContent =
      "Ничего не найдено. Попробуйте изменить запрос или фильтры.";
    empty.style.margin = "0";
    gridEl.append(empty);
    return;
  }

  const frag = document.createDocumentFragment();
  list.forEach((m) => frag.append(createMentorCard(m)));
  gridEl.append(frag);
}
