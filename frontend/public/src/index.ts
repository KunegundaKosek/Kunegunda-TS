import HomePage from './app/Home/HomePage';
import Navigation from './app/Nav/Nav';
import ProjectPage from './app/Projects/ProjectPage';
import { data, tile } from './app/data/data';

export class App {
    constructor() {
        this.initialize();
        this.renderProjectPage();
        // this.renderHomePage();
    }

    initialize() {
        this.setupNavigation();
    }

    setupNavigation() {
        new Navigation('KUNEGUNDA', tile, 'fa-solid fa-computer');

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
            alert('dodaj metodę renderContactPage()!');
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
            const text =
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.';
            new HomePage('Welcome!', text, 'content__introduction');
        }
    }
}

new App();
