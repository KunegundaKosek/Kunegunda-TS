import { ProjectData } from '../intefaces/data-interface';
import openAndCloseModal from './function-button-project';
import MousePosition from '../Projects/Project/Project1/MousePosition';

export const data: ProjectData[] = [
    {
        title: 'Retrieving mouse position',
        src: './image/picture1.png',
        text: 'In this project, the background for the div will be selected based on the mouse position.',
        button: 'Look',
        buttonId: 'project1',
        event: () => {
            openAndCloseModal();

            MousePosition(
                'Pozycja myszki',
                'sjdfjdsdjsdf llsfdjflskf lgdkfl dglfddlskfjkl dfjklfdsgljk sdlfg ; flkljg; fdldkfsgjgk j lsdfgj jl gfj gljgflj jglfd jlfsg;waq;weqo nj lq/A/GAVGJLDHRBASDZ',
            );
        },
        classSection: 'content__projects',
    },

    {
        title: 'Project 2',
        src: './image/picture1.png',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        button: 'Look',
        buttonId: 'project2',
        event: () => {
            openAndCloseModal();

            MousePosition(
                '',
                '',
            );
        },
        classSection: 'content__projects',
    },

    {
        title: 'Project 3',
        src: './image/picture1.png',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        button: 'Look',
        buttonId: 'project3',
        event: () => {},
        classSection: 'content__projects',
    },

    {
        title: 'Project 4',
        src: './image/picture1.png',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        button: 'Look',
        buttonId: 'project4',
        event: () => {},
        classSection: 'content__projects',
    },

    {
        title: 'Project 5',
        src: './image/picture1.png',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        button: 'Look',
        buttonId: 'project5',
        event: () => {},
        classSection: 'content__projects',
    },
];

export const tile: string[] = ['home', 'project', 'contact'];
