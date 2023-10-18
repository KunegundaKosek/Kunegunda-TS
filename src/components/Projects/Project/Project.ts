export abstract class Project {
      protected div: HTMLDivElement;
      private h1: HTMLHeadingElement;
      private p: HTMLParagraphElement;
  
      constructor(
          private modalContentSelector: string,
          private h1Txt: string,
          private pTxt: string,
      ) {
          this.div = this.getModalContentElement();
          this.h1 = this.createHeadingElement('content__modal-h1', 'h1');
          this.p = this.createParagraphElement('content__modal-p');
  
          this.h1.textContent = this.h1Txt;
          this.p.textContent = this.pTxt;
  
          this.setupElements();
      }
  
      private getModalContentElement(): HTMLDivElement {
          const element = document.querySelector(
              this.modalContentSelector,
          ) as HTMLDivElement;
          element.innerHTML = '';
          return element;
      }
  
      protected createHeadingElement(className: string, createElement: string): HTMLHeadingElement {
          const heading = document.createElement(createElement) as HTMLHeadingElement;
          heading.className = className;
          return heading;
      }
  
      private createParagraphElement(className: string): HTMLParagraphElement {
          const paragraph = document.createElement('p');
          paragraph.className = className;
          return paragraph;
      }
  
      protected setupElements(): void {
          this.div.appendChild(this.h1);
          this.div.appendChild(this.p);
      }

}