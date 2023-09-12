export default class Slide {
  container: Element;
  slides: Element[];
  controls: Element;
  time: number;
  index: number;
  slide: Element;
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

    this.index = 0;
    this.slide = this.slides[this.index];

    this.init()
  }
  hide(el: Element) {
    el.classList.remove("active");
  }
  show(index: number) {
    this.index = index;
    this.slide = this.slides[this.index];
    this.slides.forEach((el) => this.hide(el));
    this.slide.classList.add("active");
  }
  prev() {
    this.show(this.index - 1)
  }
  next() {
    this.show(this.index + 1)
  }
  private addControls() {
    const prevButton = document.createElement('button');
    const nextButton = document.createElement('button');
    this.controls.appendChild(prevButton)
    this.controls.appendChild(nextButton)
    prevButton.innerText = 'Slide Anterior'
    nextButton.innerText = 'Próximo Slide'
    prevButton.addEventListener('pointerup', () => this.prev())
    nextButton.addEventListener('pointerup', () => this.next())
  }

  private init() {
    this.addControls()
    this.show(this.index);
  } 
}
