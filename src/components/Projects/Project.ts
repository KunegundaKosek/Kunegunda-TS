export default class Project {
    private title: string;
    private src: string;
    private text: string;
    private button: string;
    private event: () => void;
    private classSection: string;

    constructor(
        title: string,
        src: string,
        text: string,
        button: string,
        event: () => void,
        classSection: string
    ) {
        this.title = title;
        this.src = src;
        this.text = text;
        this.button = button;
        this.event = event;
        this.classSection = classSection;

        this.render();
    }

    public render(): HTMLElement {

        const tile = document.createElement('article');
        tile.setAttribute('class', this.classSection);

        const title = document.createElement('h2');
        title.textContent = this.title;
        tile.appendChild(title);

        const image = document.createElement('img');
        image.src = this.src;
        image.alt = this.title;
        tile.appendChild(image);


        const description = document.createElement('p');
        description.textContent = this.text;
        tile.appendChild(description);

        const button = document.createElement('button');
        button.textContent = this.button;
        button.addEventListener('click', this.event);
        tile.appendChild(button);

        return tile;
    }
}
