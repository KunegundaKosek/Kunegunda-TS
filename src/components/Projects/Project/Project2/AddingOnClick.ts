import { Project } from "../Project";

export class AddingOnClick extends Project {
      private button: HTMLButtonElement;

      constructor(modalContentSelector: string, h1Txt: string, pTxt: string, buttonClassName: string, buttonTxt: string, buttonId: string, containerTileClassName: string,tileClassName: string, tileClassNameDivisibleByFive: string) {
            super(modalContentSelector, h1Txt, pTxt);
            this.button = this.createButtonElement(buttonClassName, buttonTxt, buttonId)
            this.setupAddingOnClick(tileClassName, containerTileClassName, tileClassNameDivisibleByFive);
            // ('content__modal-content-button', 'Click', 'buttonAddingOnClick')
      }

      private setupAddingOnClick(tileClassName: string, containerTileClassName: string, tileClassNameDivisibleByFive: string) {
            this.div.appendChild(this.button);
            let i: number = 0;

            const containerTile: HTMLDivElement = document.createElement('div');
            containerTile.className = containerTileClassName;
            this.div.appendChild(containerTile);

            this.button.addEventListener('click', () => {
                  const tile: HTMLDivElement = document.createElement('div');
                  tile.className = tileClassName;
                  tile.textContent = `${++i}`;

                  if(i % 5 === 0) {
                        tile.className = tileClassNameDivisibleByFive
                  }

                  this.div.appendChild(tile);
                  containerTile.appendChild(tile);
            })

      }



      private createButtonElement(className: string, buttonTxt: string, buttonId: string): HTMLButtonElement {
            const button = document.createElement('button') as HTMLButtonElement;
            button.className = className;
            button.textContent = buttonTxt;
            button.id = buttonId;
            return button;
      }
}