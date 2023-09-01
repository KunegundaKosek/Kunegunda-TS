import Navigation from './components/Nav/Nav';
import ProjectPage from './components/Projects/ProjectPage';
import { data } from './components/Projects/data';
const tile = ['home', 'project', 'contact'];
new Navigation('KUNEGUNDA', tile, 'fa-solid fa-computer');
const projectButton = document.getElementById('project');
projectButton.addEventListener('click', () => {
    const main = document.getElementById('main');
    if (main) {
        main.textContent = '';
        new ProjectPage('content__projects', data);
    }
});
const homeButton = document.getElementById('home');
homeButton.addEventListener('click', () => {
    console.log('click home button');
});
const contactButton = document.getElementById('contact');
contactButton.addEventListener('click', () => {
    console.log('click contact button');
});
//# sourceMappingURL=index.js.map