import Slide from "./slide.js";
const container = document.getElementById("slide");
const elements = document.getElementById("slide-elements");
const constrols = document.getElementById("slide-controls");
if (container && elements && constrols && elements.children.length) {
    new Slide(container, Array.from(elements.children), constrols, 3000);
}
//# sourceMappingURL=script.js.map