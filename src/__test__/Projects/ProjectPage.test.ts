// import Project from "../../app/Projects/Project";
import ProjectPage from '../../app/Projects/ProjectPage';

describe('ProjectPage', () => {
    let main: HTMLElement;

    beforeEach(() => {
        main = document.createElement('main');
        main.id = 'main';
        document.body.appendChild(main);
    });

    afterEach(() => {
        document.body.removeChild(main);
    });

    it.skip('should create an instance od ProjectPage with the correct properties', () => {
        const classSection = 'test-section';
        const data = [
            {
                title: 'Project 1',
                src: 'image1.jpg',
                text: 'Description 1',
                button: 'Button 1',
                buttonId: 'button1',
                event: jest.fn(),
                classSection: 'project-section',
            },
        ];

        const main = document.createElement('main');
        main.id = 'main';
        document.body.appendChild(main);

        const projectPage = new ProjectPage(classSection, data);

        expect(projectPage).toBeInstanceOf(ProjectPage);
        expect(projectPage.getClassSection()).toBe(classSection);

        const projects = projectPage.getProjects();
        expect(Array.isArray(projects)).toBe(true);
        expect(projects.length).toBe(data.length);

        // TO IMPROVE !!!!!!!!!!!!!!!
        //   const renderSpy = jest.spyOn(Project.prototype, 'render');

        //   projects.forEach((project) => {
        //       expect(renderSpy).toHaveBeenCalled();
        //       expect(project).toBeInstanceOf(Project);
        //   });
        //   renderSpy.mockRestore();
    });

    it.only('should render the correct number of projects', () => {
        const classSection = 'test-section';
        const data = [
            {
                title: 'Project 1',
                src: 'image1.jpg',
                text: 'Description 1',
                button: 'Button 1',
                buttonId: 'button1',
                event: jest.fn(),
                classSection: 'project-section',
            },
            {
                title: 'Project 2',
                src: 'image2.jpg',
                text: 'Description 2',
                button: 'Button 2',
                buttonId: 'button2',
                event: jest.fn(),
                classSection: 'project-section',
            },
        ];

        const projectPage = new ProjectPage(classSection, data);

        projectPage.render();
        const section = main.querySelector('section');
        const projects = section?.querySelectorAll('article');

        expect(projects).not.toBeNull();
        expect(projects?.length).toBe(data.length);

    });
});
