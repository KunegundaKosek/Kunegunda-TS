import Project from '../../app/Projects/Project';

interface TestData {
    title: string;
    src: string;
    text: string;
    button: string;
    buttonId: string;
    event: () => void;
    classSection: string;
}

describe('Project', () => {
    let project: Project;
    let testData: TestData;

    beforeEach(() => {
        testData = {
            title: 'Test Title',
            src: 'http://localhost/test.jpg',
            text: 'Test description',
            button: 'Click Me',
            buttonId: 'test-button',
            event: jest.fn(),
            classSection: 'test-section',
        };

        project = new Project(
            testData.title,
            testData.src,
            testData.text,
            testData.button,
            testData.buttonId,
            testData.event,
            testData.classSection,
        );
    });
    it('should create an instance of Project with the correct properties', () => {
        // Testy na właściwości utworzonej instancji projektu
        const renderedTile = project.render();

        expect(project).toBeInstanceOf(Project);
        expect(renderedTile).toBeInstanceOf(HTMLElement);
        expect(renderedTile.querySelector('h2')?.textContent).toBe(
            testData.title,
        );
        expect(renderedTile.querySelector('img')?.src).toBe(testData.src);
        expect(renderedTile.querySelector('img')?.alt).toBe(testData.title);
        expect(renderedTile.querySelector('p')?.textContent).toBe(
            testData.text,
        );
        expect(renderedTile.querySelector('button')?.textContent).toBe(
            testData.button,
        );
        expect(renderedTile.querySelector('button')?.id).toBe(
            testData.buttonId,
        );

        const buttonElement = renderedTile.querySelector('button');
        if (buttonElement) {
            expect(testData.event).not.toHaveBeenCalled();
            buttonElement.click();
            expect(testData.event).toHaveBeenCalled();
        }
    });
});
