export default class Navigation {
    private title: string;
    private menu: string[];
    private classIcon: string;

    constructor(
        title: string,
        menu: string[],
        classIcon: string,
    ) {
        this.title = title;
        this.menu = menu;
        this.classIcon = classIcon;

        this.render();
    }

    render(): void {
        this.createNav();
        this.createHeader();
    }

    private createHeader(): HTMLHeadElement {
        const header = document.querySelector('header')! as HTMLHeadElement;

        const h1 = document.createElement('h1');
        h1.textContent = this.title;

        const icon = document.createElement('i');
        icon.setAttribute('class', this.classIcon);

        h1.appendChild(icon);
        header.appendChild(h1);

        return header;
    }

    private createNav(): HTMLElement {
        const nav = document.querySelector('nav')! as HTMLElement;

        this.menu.forEach((link) => {
            const div = this.createMenuLink(link);
            nav.appendChild(div);
        });

        return nav;
    }

    private createMenuLink(link: string): HTMLDivElement {
        const div = document.createElement('div');
        div.textContent = link;
        div.id = link;

        return div;
    }
}
