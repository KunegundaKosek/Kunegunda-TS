export default function Modal( divModalClass: string, divModalId: string, divModalContentClass: string, spanClass: string, spanId: string, buttonTxt: string, paragraphTxt: string): void {

      const main = document.querySelector('main')! as HTMLElement;
      console.log(main);
      
      const divModal: HTMLDivElement = document.createElement('div');
      // divModal.className = 'content__modal';
      divModal.className = divModalClass;
      // divModal.id = 'modal';
      divModal.id = divModalId;
      divModal.style.display = 'none';

      main.appendChild(divModal);

      const divModalContent: HTMLDivElement = document.createElement('div');
      // divModalContent.className = 'content__modal-content';
      divModalContent.className = divModalContentClass;

      const button: HTMLButtonElement = document.createElement('button');
      // span.className = 'content__modal-content-close';
      button.className = spanClass;
      button.id = spanId,
      button.textContent = buttonTxt;
      const p: HTMLParagraphElement = document.createElement('p');
      p.textContent = paragraphTxt;

      divModalContent.appendChild(button);
      divModalContent.appendChild(p);

      divModal.appendChild(divModalContent);

      
}