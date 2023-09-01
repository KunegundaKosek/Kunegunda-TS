import Navigation from './components/Nav/Nav';
const tile = ['home', 'project', 'contact'];
new Navigation('KUNEGUNDA', tile, 'header', 'fa-solid fa-computer', 'menu');
const projectButton = document.getElementById('project');
projectButton.addEventListener('click', () => {
    console.log('click project');
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