import Project from "./Project";

export default class ProjectPage {
    private classSection: string;
    private projects: Project[];

    constructor(classSection: string, data: any[]) {
        this.classSection = classSection;
        this.projects = data.map(
            (projectData) =>
                new Project(
                    projectData.title,
                    projectData.src,
                    projectData.text,
                    projectData.button,
                    projectData.event,
                    projectData.classSection
                ),
        );

        this.render();
    }

    public render(): void {
        const main = document.getElementById('main')! as HTMLElement;

        const section = this.createSection();
        main.appendChild(section);

        this.createTiles(section);
        main.appendChild(section);
    }


    private createSection(): HTMLElement {
        const section = document.createElement('section');
        section.setAttribute('class', this.classSection);
        return section;
    }

    private createTiles(section: HTMLElement): void {
        this.projects.forEach((project) => {
            const tileElement = project.render();
            section.appendChild(tileElement);
        });
    }
}
