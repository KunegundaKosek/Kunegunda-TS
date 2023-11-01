export default class HomePage {
      private title: string;
      private description: string;
      private classSection: string;

      constructor(title: string, description: string, classSection: string) {
            this.title = title;
            this.description = description;
            this.classSection = classSection;

            this.render();
      }

      private createTitleElement(): HTMLHeadingElement {
            const h1 = document.createElement('h1');
            h1.textContent = this.title;
            return h1;
      }

      private createDescriptionElement(): Node {
            const description = document.createElement('p');
            description.textContent = this.description;
            return description;
        }

      public render(): void {
            const main = document.querySelector('main')! as HTMLElement;
            const section = document.createElement('section');
            section.setAttribute('class', this.classSection)

            const titleElement = this.createTitleElement();
            const descriptionElement = this.createDescriptionElement();

            section.appendChild(titleElement);
            section.appendChild(descriptionElement);

            main.appendChild(section);
      }
}