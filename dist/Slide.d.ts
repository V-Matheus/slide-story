export default class Slide {
    container: Element;
    slides: Element[];
    controls: Element;
    time: number;
    constructor(container: Element, slides: Element[], controls: Element, time?: number);
    show(index: number): void;
}
