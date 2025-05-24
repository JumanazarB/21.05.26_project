import { footerData } from "./footer/footer-data.js";
import { createFooter } from "./footer/createFooter.js";
import { directionsData } from "./direction/direction-data.js";
import { createDirectionsMenu } from "./direction/createDirection.js";

window.addEventListener("DOMContentLoaded", () => {
  createDirectionsMenu("directions-menu", directionsData);
  createFooter("footer", footerData);
});
