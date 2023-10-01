export default class Modal {
      private divModal: HTMLDivElement;
      private divModalContent: HTMLDivElement;

      constructor(
            private divModalClass: string,
            private divModalId: string,
            private divModalContentClass: string,
            private spanClass: string,
            private spanId: string,
      ) {
            this.divModal = this.createDivModal();
            this.divModalContent = this.createDivModalContent();
            this.setupModal();
      }

      private createDivModal(): HTMLDivElement {
            const divModal = document.createElement('div');
            divModal.className = this.divModalClass;
            divModal.id = this.divModalId;
            divModal.style.display = 'none';
            return divModal;
      }

      private createDivModalContent(): HTMLDivElement {
            const divModalContent = document.createElement('div');
            divModalContent.className = this.divModalContentClass;
            return divModalContent;
      }

      private setupModal(): void {
            const main = document.querySelector('main')! as HTMLElement;
            console.log(main);

            const button = document.createElement('i');
            button.className = this.spanClass;
            button.id = this.spanId;

            this.divModal.appendChild(button);
            this.divModal.appendChild(this.divModalContent);
            main.appendChild(this.divModal);
      }

}
