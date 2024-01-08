export default class HomePage {
    private title: string;
    private description: string;
    private classSection: string;

    constructor(
        title: string,
        description: string,
        classSection: string,
        title1: string,
        text1: string,
        title2: string,
        text2: string,
        title3: string,
        text3: string,
        title4: string,
        text4: string,
        pTxt: string,
    ) {
        this.title = title;
        this.description = description;
        this.classSection = classSection;
        this.render(title1, text1, title2, text2, title3, text3, title4, text4, pTxt);
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

    private createSectionElement(
        title1: string,
        text1: string,
        title2: string,
        text2: string,
        title3: string,
        text3: string,
        title4: string,
        text4: string,
        pTxt: string,
    ): Node {
        const section: HTMLElement = document.createElement('section');

        const about: HTMLHeadingElement = document.createElement('h2');
        about.textContent = title1;
        const aboutText: HTMLParagraphElement = document.createElement('p');
        aboutText.innerHTML = text1;
        about.appendChild(aboutText);

        const project: HTMLHeadingElement = document.createElement('h2');
        project.textContent = title2;
        const projectText: HTMLParagraphElement = document.createElement('p');
        projectText.textContent = text2;
        project.appendChild(projectText);

        const contact: HTMLHeadingElement = document.createElement('h2');
        contact.textContent = title3;
        const contactText: HTMLParagraphElement = document.createElement('p');
        contactText.textContent = text3;
        contact.appendChild(contactText)

        const codewars: HTMLHeadingElement = document.createElement('h2');
        codewars.textContent = title4;
        const codewarsText: HTMLParagraphElement = document.createElement('p');
        codewarsText.textContent = text4;
        codewars.appendChild(codewarsText);

        const p: HTMLParagraphElement = document.createElement('p');
        p.textContent = pTxt;

        section.append(about, project, contact, codewars, p);

        return section;
    }

    public render(
        title1: string,
        text1: string,
        title2: string,
        text2: string,
        title3: string,
        text3: string,
        title4: string,
        text4: string,
        pTxt: string,
    ): void {
        const main = document.querySelector('main')! as HTMLElement;
        const section = document.createElement('section');
        section.setAttribute('class', this.classSection);

        const titleElement = this.createTitleElement();
        const descriptionElement = this.createDescriptionElement();
        const sectionElement = this.createSectionElement(
            title1,
            text1,
            title2,
            text2,
            title3,
            text3,
            title4,
            text4,
            pTxt,
        );

        section.appendChild(titleElement);
        section.appendChild(descriptionElement);
        section.appendChild(sectionElement);

        main.appendChild(section);
    }
}
