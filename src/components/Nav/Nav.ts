export default class Navigation {
    private title: string;
    private menu: string[];
    private classHeader: string;
    private classIcon: string;
    private classNav: string;

    constructor(
        title: string,
        menu: string[],
        classHeader: string,
        classIcon: string,
        classNav: string,
    ) {
        this.title = title;
        this.menu = menu;
        this.classHeader = classHeader;
        this.classIcon = classIcon;
        this.classNav = classNav;

        this.render();
    }

    render(): void {
        const body = document.querySelector('body')! as HTMLBodyElement;

        const header = this.createHeader();
        const nav = this.createNav();

        body.appendChild(header);
        body.appendChild(nav);
    }

    private createHeader(): HTMLHeadElement {
        const header = document.createElement('header');
        header.setAttribute('class', this.classHeader);

        const h1 = document.createElement('h1');
        h1.textContent = this.title;

        const icon = document.createElement('i');
        icon.setAttribute('class', this.classIcon);

        h1.appendChild(icon);
        header.appendChild(h1);

        return header;
    }

    private createNav(): HTMLElement {
        const nav = document.createElement('nav');
        nav.setAttribute('class', this.classNav);

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
