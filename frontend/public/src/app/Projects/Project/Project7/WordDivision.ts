import { Project } from '../Project';

export class WordDivision extends Project {
    private input: HTMLInputElement;
    private button: HTMLButtonElement;
    private divInfo: HTMLDivElement;
    private h3: HTMLHeadingElement;
    private pNumber: HTMLParagraphElement;
    private ul: HTMLUListElement;

    constructor(modalContentSelector: string, h1Txt: string, pTxt: string) {
        super(modalContentSelector, h1Txt, pTxt);

        this.input = document.createElement('input');
        this.button = document.createElement('button');
        this.button.textContent = 'Look';

        this.divInfo = document.createElement('div');

        this.div.append(this.input, this.button, this.divInfo);

        this.h3 = document.createElement('h3');
        this.divInfo.appendChild(this.h3);

        this.pNumber = document.createElement('p');
        this.divInfo.appendChild(this.pNumber);

        this.ul = document.createElement('ul');
        this.divInfo.appendChild(this.ul);

        this.button.addEventListener('click', () => this.handleButtonClick());
    }

    private handleButtonClick(): void {
        if (this.input.value.trim() === '') {
            alert('Enter text');
        } else {
            console.log(this.input.value);

            this.h3.textContent = `Your sentence: ${this.input.value}`;

            const text: string = this.input.value.toLocaleLowerCase();
            const words: string[] = text
                .replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, '')
                .split(/\s+/);

            console.log(words);
            console.log(words.length);

            this.pNumber.textContent = `Number of words: ${words.length}`;

            const wordCounts: { [key: string]: number } = {};
            const uniqueWords: Set<string> = new Set();

            words.forEach((word) => {
                wordCounts[word] = (wordCounts[word] || 0) + 1;
                uniqueWords.add(word);
            });

            while (this.ul.firstChild) {
                this.ul.removeChild(this.ul.firstChild);
            }

            uniqueWords.forEach((word) => {
                const title: HTMLLIElement = document.createElement('li');
                title.textContent = `${word}: ${wordCounts[word]} times`;
                this.ul.appendChild(title);
            });
        }
    }
}
