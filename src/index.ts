import Navigation from './components/Nav/Nav';
import ProjectPage from './components/Projects/ProjectPage';
import { data } from './components/Projects/data';

const tile: string[] = ['home', 'project', 'contact'];
new Navigation('KUNEGUNDA', tile, 'fa-solid fa-computer');

const projectButton = document.getElementById('project')! as HTMLDivElement;
projectButton.addEventListener('click', () => {
    const main = document.getElementById('main');
    if (main) {
        main.textContent = '';
        new ProjectPage('content__projects', data);
    }
});

const homeButton = document.getElementById('home')! as HTMLDivElement;
homeButton.addEventListener('click', () => {
    console.log('click home button');
});

const contactButton = document.getElementById('contact')! as HTMLDivElement;
contactButton.addEventListener('click', () => {
    console.log('click contact button');
});
