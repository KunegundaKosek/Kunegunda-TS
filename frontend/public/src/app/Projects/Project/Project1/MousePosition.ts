import { Project } from "../Project";

export class MousePositionController extends Project {
    private h4: HTMLHeadingElement;

    constructor(modalContentSelector: string, h1Txt: string, pTxt: string, h4ClassName: string, selector: string) {
        super(modalContentSelector, h1Txt, pTxt);
            
        this.h4 = this.createHeadingElement(h4ClassName, selector);
        this.setupMouseMoveListener();
    }

    private setupMouseMoveListener(): void {
        this.div.appendChild(this.h4);
        
        this.div.addEventListener('mousemove', (e) => {
            const mouseX = e.clientX;
            const mouseY = e.clientY;

            const widthWindow = window.innerWidth;
            const heightWindow = window.innerHeight;

            this.h4.textContent = `${mouseX}   ${mouseY}`;

            
            const red = (mouseX / widthWindow) * 100;
            const green = (mouseY / heightWindow) * 100;
            const blue =
                (mouseX / widthWindow) * 100 +
                ((mouseY / heightWindow) * 100) / 2;

            this.div.style.backgroundColor = `rgb(${red}%, ${green}%, ${blue}%)`;
        });
    }
}
