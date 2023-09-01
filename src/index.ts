import Navigation from './components/Nav/Nav';

const tile: string[] = ['home', 'project', 'contact'];
new Navigation('KUNEGUNDA', tile, 'header', 'fa-solid fa-computer', 'menu');

const projectButton = document.getElementById('project')! as HTMLDivElement;
projectButton.addEventListener('click', () => {
    console.log('click project');
});

const homeButton = document.getElementById('home')! as HTMLDivElement;
homeButton.addEventListener('click', () => {
    console.log('click home button');
});

const contactButton = document.getElementById('contact')! as HTMLDivElement;
contactButton.addEventListener('click', () => {
    console.log('click contact button');
});

