import { Project } from '../Project';

export class MousePositionController extends Project {
    private h4: HTMLHeadingElement;

    constructor(
        modalContentSelector: string,
        h1Txt: string,
        pTxt: string,
        h4ClassName: string,
        selector: string,
    ) {
        super(modalContentSelector, h1Txt, pTxt);

        this.h4 = this.createHeadingElement(h4ClassName, selector);
        this.setupInputListener();
    }

    private setupInputListener(): void {
        this.div.appendChild(this.h4);

        const handleInput = (x: number, y: number) => {
            this.h4.textContent = `${x.toFixed(0)}   ${y.toFixed(0)}`;

            const widthWindow = window.innerWidth;
            const heightWindow = window.innerHeight;

            const red = (x / widthWindow) * 100;
            const green = (y / heightWindow) * 100;
            const blue =
                (x / widthWindow) * 100 + ((y / heightWindow) * 100) / 2;

            this.div.style.backgroundColor = `rgb(${red}%, ${green}%, ${blue}%)`;
        };

        const handleMouseMove = (e: MouseEvent) => {
            const mouseX = e.clientX;
            const mouseY = e.clientY;
            handleInput(mouseX, mouseY);
        };

        const handleTouchMove = (e: TouchEvent) => {
            const touch = e.touches[0];
            const touchX = touch.clientX;
            const touchY = touch.clientY;
            handleInput(touchX, touchY);
        };

        this.div.addEventListener('mousemove', handleMouseMove);
        this.div.addEventListener('touchmove', handleTouchMove);
    }
}
