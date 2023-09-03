import HomePage from './components/Home/HomePage';
import Navigation from './components/Nav/Nav';
import ProjectPage from './components/Projects/ProjectPage';
import { data, tile } from './components/data/data';

new Navigation('KUNEGUNDA', tile, 'fa-solid fa-computer');
// const text =
//     'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.';
// new HomePage('Welcome!', text, 'content__introduction');
new ProjectPage('content__projects', data);

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
    const main = document.getElementById('main');
    if (main) {
        main.textContent = '';
        const text =
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.';
        new HomePage('Welcome!', text, 'content__introduction');
    }
});

const contactButton = document.getElementById('contact')! as HTMLDivElement;
contactButton.addEventListener('click', () => {
    console.log('click contact button');
});

