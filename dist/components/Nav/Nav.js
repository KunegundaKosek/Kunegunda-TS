export default class Navigation {
    constructor(title, menu, classHeader, classIcon, classNav) {
        this.title = title;
        this.menu = menu;
        this.classHeader = classHeader;
        this.classIcon = classIcon;
        this.classNav = classNav;
        this.render();
    }
    render() {
        const body = document.querySelector('body');
        const header = this.createHeader();
        const nav = this.createNav();
        body.appendChild(header);
        body.appendChild(nav);
    }
    createHeader() {
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
    createNav() {
        const nav = document.createElement('nav');
        nav.setAttribute('class', this.classNav);
        this.menu.forEach((link) => {
            const div = this.createMenuLink(link);
            nav.appendChild(div);
        });
        return nav;
    }
    createMenuLink(link) {
        const div = document.createElement('div');
        div.textContent = link;
        div.id = link;
        return div;
    }
}
//# sourceMappingURL=Nav.js.map