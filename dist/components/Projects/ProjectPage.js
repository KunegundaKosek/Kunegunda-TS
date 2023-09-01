import Project from "./Project";
export default class ProjectPage {
    constructor(classSection, data) {
        this.classSection = classSection;
        this.projects = data.map((projectData) => new Project(projectData.title, projectData.src, projectData.text, projectData.button, projectData.event, projectData.classSection));
        this.render();
    }
    render() {
        const main = document.getElementById('main');
        const section = this.createSection();
        main.appendChild(section);
        this.createTiles(section);
        main.appendChild(section);
    }
    createSection() {
        const section = document.createElement('section');
        section.setAttribute('class', this.classSection);
        return section;
    }
    createTiles(section) {
        this.projects.forEach((project) => {
            const tileElement = project.render();
            section.appendChild(tileElement);
        });
    }
}
//# sourceMappingURL=ProjectPage.js.map