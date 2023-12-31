import Timeout from './TimeOut.js';
export default class Slide {
    container: Element;
    slides: Element[];
    controls: Element;
    time: number;
    index: number;
    slide: Element;
    timeout: Timeout | null;
    pausedTimeout: Timeout | null;
    paused: Boolean;
    thumbItems: HTMLElement[] | null;
    thumb: HTMLElement | null;
    constructor(container: Element, slides: Element[], controls: Element, time?: number);
    hide(el: Element): void;
    show(index: number): void;
    autoVideo(video: HTMLVideoElement): void;
    auto(time: number): void;
    prev(): void;
    next(): void;
    pause(): void;
    continue(): void;
    private addControls;
    private addThumbItems;
    private init;
}
