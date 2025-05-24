// // src/js/inject.js
// async function loadComponent(id, path) {
//   const container = document.getElementById(id);
//   if (!container) return;

//   try {
//     const response = await fetch(path);
//     const html = await response.text();
//     container.innerHTML = html;
//   } catch (err) {
//     console.error(`Error loading ${path}:`, err);
//   }
// }

// loadComponent("header", "../src/components/header.html");
// loadComponent("footer", "../src/components/footer.html");
// loadComponent("blok", "../src/components/blok.html");
// loadComponent("buttons", "../src/components/buttons.html");
// loadComponent("directions", "../src/components/directions.html");
// loadComponent("filters", "../src/components/filters.html");
// loadComponent("online", "../src/components/online.html");
// loadComponent("schools", "../src/components/schools.html");
async function loadComponent(id, path, callback) {
  const container = document.getElementById(id);
  if (!container) return;

  try {
    const response = await fetch(path);
    const html = await response.text();
    container.innerHTML = html;
    if (callback) callback(); // yuklangandan keyin bajariladigan funksiya
  } catch (err) {
    console.error(`Error loading ${path}:`, err);
  }
}

// Barcha komponentlarni yuklash
loadComponent("header", "../src/components/header.html");
loadComponent("footer", "../src/components/footer.html");
loadComponent("main", "../src/components/main.html");
loadComponent("blok", "../src/components/blok.html");
loadComponent("buttons", "../src/components/buttons.html");
loadComponent("directions", "../src/components/directions.html");
loadComponent("filters", "../src/components/filters.html");
loadComponent("online", "../src/components/online.html");
loadComponent("schools", "../src/components/schools.html");


