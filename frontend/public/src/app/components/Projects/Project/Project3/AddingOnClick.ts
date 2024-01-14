import { Project } from '../Project';

export class AddingOnClick extends Project {
    protected button: HTMLButtonElement;

    constructor(
        modalContentSelector: string,
        h1Txt: string,
        pTxt: string,
        buttonClassName: string,
        buttonTxt: string,
        buttonId: string,
        containerTileClassName: string,
        tileClassName: string,
        tileClassNameDivisibleByFive: string,
        numberIncrement: number,
        addedNumber: number,
    ) {
        super(modalContentSelector, h1Txt, pTxt);
        this.button = this.createButtonElement(
            buttonClassName,
            buttonTxt,
            buttonId,
        );
        this.setupAddingOnClick(
            tileClassName,
            containerTileClassName,
            tileClassNameDivisibleByFive,
            numberIncrement,
            addedNumber,
        );
    }

    private setupAddingOnClick(
        tileClassName: string,
        containerTileClassName: string,
        tileClassNameDivisibleByFive: string,
        numberIncrement: number,
        addedNumber: number,
    ) {
        this.div.appendChild(this.button);

        const containerTile: HTMLDivElement = document.createElement('div');
        containerTile.className = containerTileClassName;
        this.div.appendChild(containerTile);

        this.button.addEventListener('click', () => {
            const tile: HTMLDivElement = document.createElement('div');
            tile.className = tileClassName;
            tile.textContent = `${(numberIncrement += addedNumber)}`;

            if (numberIncrement % 5 === 0) {
                tile.className = tileClassNameDivisibleByFive;
            }

            this.div.appendChild(tile);
            containerTile.appendChild(tile);
        });
    }

    private createButtonElement(
        className: string,
        buttonTxt: string,
        buttonId: string,
    ): HTMLButtonElement {
        const button = document.createElement('button') as HTMLButtonElement;
        button.className = className;
        button.textContent = buttonTxt;
        button.id = buttonId;
        return button;
    }
}
