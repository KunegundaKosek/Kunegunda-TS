export default class Navigation {
    constructor(title, menu, classIcon) {
        this.title = title;
        this.menu = menu;
        this.classIcon = classIcon;
        this.render();
    }
    render() {
        this.createNav();
        this.createHeader();
    }
    createHeader() {
        const header = document.querySelector('header');
        const h1 = document.createElement('h1');
        h1.textContent = this.title;
        const icon = document.createElement('i');
        icon.setAttribute('class', this.classIcon);
        h1.appendChild(icon);
        header.appendChild(h1);
        return header;
    }
    createNav() {
        const nav = document.querySelector('nav');
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