import { Project } from '../Project';

export class ResizableText extends Project {
    private buttonPlus: HTMLButtonElement;
    private button10px: HTMLButtonElement;
    private ul: HTMLUListElement;
    private fontSize: number = 10;

    constructor(
        modalContentSelector: string,
        h1Txt: string,
        pTxt: string,
        ulClassName: string,
        buttonPlusTxt: string,
        button10pxTxt: string,
        buttonClassName: string,
    ) {
        super(modalContentSelector, h1Txt, pTxt);

        this.buttonPlus = this.createButton(buttonPlusTxt, buttonClassName);
        this.button10px = this.createButton(button10pxTxt, buttonClassName);
        this.ul = this.createUlList(ulClassName);

        this.setupElements();
        this.setupAddElements();
        this.setupEventListener();
    }

    private createButton(
        text: string,
        buttonClassName: string,
    ): HTMLButtonElement {
        const button = document.createElement('button');
        button.className = buttonClassName;
        button.textContent = text;
        return button;
    }

    private createUlList(ulClassName: string): HTMLUListElement {
        const ul = document.createElement('ul');
        ul.className = ulClassName;
        const arrayElements: string[] = [];

        for (let i = 1; i <= 10; ++i) {
            arrayElements.push(`Element - ${i}`);
        }

        arrayElements.forEach((element) => {
            const li = document.createElement('li');
            li.textContent = element;
            ul.appendChild(li);
        });

        return ul;
    }

    protected setupAddElements(): void {
        this.div.appendChild(this.buttonPlus);
        this.div.appendChild(this.button10px);
        this.div.appendChild(this.ul);
    }

    private setupEventListener(): void {
        this.buttonPlus.addEventListener('click', () => {
            this.fontSize += 1;
            this.adjustFontSize();
        });

        this.button10px.addEventListener('click', () => {
            this.fontSize = 11;
            this.adjustFontSize();
        });
    }

    private adjustFontSize(): void {
        if (this.fontSize > 65) {
            this.fontSize = 10;
        }

        this.ul.style.fontSize = `${this.fontSize}px`;
    }
}
