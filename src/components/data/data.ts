import { ProjectData } from '../intefaces/data-interface';
import openAndCloseModal from './function-button-project';
import { MousePositionController } from '../Projects/Project/Project1/MousePosition';
// import { AddingOnClick } from '../Projects/Project/Project2/AddingOnClick';

export const data: ProjectData[] = [
    {
        title: 'Retrieving mouse position',
        src: './image/picture1.png',
        text: 'In this project, the background for the div will be selected based on the mouse position.',
        button: 'Look',
        buttonId: 'project1',
        event: () => {

            openAndCloseModal('content__modal-content-1', 'modal_1', 'buttonId_1');
            
            new MousePositionController(
                '.content__modal-content-1',
                'MousePosition',
                'przykładowy opisssss'
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
            openAndCloseModal('content__modal-content-2', 'modal_2', 'buttonId_2');
            // AddingOnClick('.content__modal-content-2');
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
