import ContactPage from './app/Contact/ContactPage';
import HomePage from './app/Home/HomePage';
import {
    about,
    aboutText,
    codewars,
    codewarsText,
    contact,
    contactText,
    descriptionEnd,
    h1Txt,
    introduction,
    project,
    projectText,
} from './app/Home/data';
import Navigation from './app/Nav/Nav';
import ProjectPage from './app/Projects/ProjectPage';
import { data, tile } from './app/data/data';

export class App {
    constructor() {
        this.initialize();
        // this.renderProjectPage();
        this.renderHomePage();
    }

    initialize() {
        this.setupNavigation();
    }

    setupNavigation() {
        new Navigation('KUNEGUNDA ', tile, 'fa-solid fa-computer');

        const projectButton = document.getElementById(
            'project',
        )! as HTMLDivElement;
        projectButton.addEventListener('click', () => {
            this.renderProjectPage();
        });

        const homeButton = document.getElementById('home')! as HTMLDivElement;
        homeButton.addEventListener('click', () => {
            this.renderHomePage();
        });

        const contactButton = document.getElementById(
            'contact',
        )! as HTMLDivElement;
        contactButton.addEventListener('click', () => {
            ContactPage('Contact Details');
        });
    }

    private renderProjectPage() {
        const main = document.getElementById('main');
        if (main) {
            main.textContent = '';
            new ProjectPage('content__projects', data);
        }
    }

    private renderHomePage() {
        const main = document.getElementById('main');
        if (main) {
            main.textContent = '';
            new HomePage(
                h1Txt,
                introduction,
                'content__introduction',
                about,
                aboutText,
                project,
                projectText,
                contact,
                contactText,
                codewars,
                codewarsText,
                descriptionEnd,
            );
        }
    }
}

new App();
