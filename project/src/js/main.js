// src/js/main.js
import { footerData } from "./footer/footer-data.js";
import { createFooter } from "./footer/createFooter.js";

// inject.js orqali #footer yuklangandan keyin DOM tayyor bo‘ladi
window.addEventListener("DOMContentLoaded", () => {
  createFooter("footer__column", footerData);
});