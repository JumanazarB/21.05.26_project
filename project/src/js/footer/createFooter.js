// src/js/footer/createFooter.js
export function createFooter(containerId, data) {
  const footer = document.getElementById(containerId);
  if (!footer) return;

//   footer.innerHTML = ''; // eski elementlarni tozalab yuborish
//   

  data.forEach(column => {
    const columnDiv = document.createElement('div');
    columnDiv.classList.add('footer-column');

    const title = document.createElement('h3');
    title.innerHTML = column.title;
    columnDiv.appendChild(title);

    const ul = document.createElement('ul');

    column.links.forEach(link => {
      const li = document.createElement('li');
      const a = document.createElement('a');
      a.href = link.url;
      a.innerHTML = link.text;
      li.appendChild(a);
      ul.appendChild(li);
    });

    columnDiv.appendChild(ul);
    footer.appendChild(columnDiv);
  });
}
