export default class Slide {
    container;
    slides;
    controls;
    time = 5000;
    constructor(container, slides, controls, time = 5000) {
        this.container = container;
        this.slides = slides;
        this.controls = controls;
        this.time = time;
        console.log(this.container);
        console.log(this.slides);
        console.log(this.controls);
        console.log(this.time);
        this.show(0);
    }
    show(index) {
        this.slides.forEach((el) => el.classList.remove("active"));
        this.slides[index].classList.add("active");
    }
}
//# sourceMappingURL=Slide.js.map