export default class Slide {
  container: Element;
  slides: Element[];
  controls: Element;
  time: number = 5000;
  constructor(
    container: Element,
    slides: Element[],
    controls: Element,
    time: number = 5000
  ) {
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
  show(index: number) {
    this.slides.forEach((el) => el.classList.remove("active"));
    this.slides[index].classList.add("active");
  }
}
