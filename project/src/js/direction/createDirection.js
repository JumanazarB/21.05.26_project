
export function createDirectionsMenu(containerId, data) {
  const container = document.getElementById(containerId);
  if (!container) return;

  const title = document.createElement("h2");
  title.textContent = "Направления курсов";
  container.appendChild(title);

  const wrapper = document.createElement("div");
  wrapper.className = "directions-wrapper";

  data.forEach(group => {
    const categoryCol = document.createElement("div");
    categoryCol.className = "directions-category";

    const catTitle = document.createElement("div");
    catTitle.className = "category-title";
    catTitle.textContent = group.category;
    categoryCol.appendChild(catTitle);

    const active = group.active
    console.log(active)

    if (active) {
      const ul = document.createElement("ul");
      group.items.forEach(item => {
        const li = document.createElement("li");
        const a = document.createElement("a");
        a.href = "#"; // kerakli linkni yozing
        a.textContent = item;
        li.appendChild(a);
        ul.appendChild(li);
      });
      categoryCol.appendChild(ul);
    }

    wrapper.appendChild(categoryCol);
  });

  container.appendChild(wrapper);
}
