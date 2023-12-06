import { ProjectData } from '../intefaces/data-interface';
import openAndCloseModal from './function-button-project';
import { MousePositionController } from '../Projects/Project/Project1/MousePosition';
import { AddingOnClick } from '../Projects/Project/Project3/AddingOnClick';
import { Clicker } from '../Projects/Project/Project2/Clicker';
import { ResizableText } from '../Projects/Project/Project4/ResizableText';
import { Calculator } from '../Projects/Project/Project5/Calculator';
import { ProgrammingGame } from '../Projects/Project/Project6/ProgrammingGame';
import { WordDivision } from '../Projects/Project/Project7/WordDivision';
import { VendingMachine } from '../Projects/Project/Project8/VendingMachine';
import { CashPoint } from '../Projects/Project/Project9/CashPoint';

export const data: ProjectData[] = [

    {
        title: 'Cash Point',
        src: '../image/picture1.png',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        button: 'Look',
        buttonId: 'project7',
        event: () => {
            openAndCloseModal(
                'content__modal-cashpoint',
                'modal_cashpoint',
                'buttonId_cashpoint',
            );

            CashPoint('.content__modal-cashpoint');
        },
        classSection: 'content__projects',
    },
    {
        title: 'Retrieving mouse position',
        src: '../image/picture1.png',
        text: 'In this project, the background for the div will be selected based on the mouse position.',
        button: 'Look',
        buttonId: 'project1',
        event: () => {
            openAndCloseModal('content__modal-1', 'modal_1', 'buttonId_1');

            new MousePositionController(
                '.content__modal-1',
                'MousePosition',
                'przykładowy opisssss',
                'content__modal-mousePosition-h4',
                'h4',
            );
        },
        classSection: 'content__projects',
    },

    {
        title: 'Clicker',
        src: '../image/picture1.png',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        button: 'Look',
        buttonId: 'project2',
        event: () => {
            openAndCloseModal('content__modal-2', 'modal_2', 'buttonId_2');

            new Clicker(
                '.content__modal-2',
                'Clicker',
                'Click Click Click Click Click ClickClick Click ClickClick',
                'content__modal-clicker-h4',
            );
        },
        classSection: 'content__projects',
    },

    {
        title: 'Adding on click',
        src: '../image/picture1.png',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        button: 'Look',
        buttonId: 'project3',
        event: () => {
            openAndCloseModal('content__modal-3', 'modal_3', 'buttonId_3');

            new AddingOnClick(
                '.content__modal-3',
                'Adding on click',
                'Click click click click click click',
                'content__modal-addingOnClick-button',
                'click',
                'buttonAddingOnClick',
                'content__modal-addingOnClick',
                'content__modal-addingOnClick-tile',
                'content__modal-addingOnClick-tileDivisibleByFive',
                0,
                1,
            );
        },
        classSection: 'content__projects',
    },

    {
        title: 'Resizable text',
        src: '../image/picture1.png',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        button: 'Look',
        buttonId: 'project4',
        event: () => {
            openAndCloseModal('content__modal-4', 'modal_4', 'buttonId_4');
            new ResizableText(
                '.content__modal-4',
                'Resizable Text',
                'txt txttxt txt txt txt txttxt txt txt',
                'content__modal-resizableText-ul',
                'Plus 1px',
                'Size 10px',
                'content__modal-resizableText-btn',
            );
        },
        classSection: 'content__projects',
    },

    {
        title: 'Calculator',
        src: '../image/picture1.png',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        button: 'Look',
        buttonId: 'project5',
        event: () => {
            openAndCloseModal(
                'content__modal-5',
                'modal_calculator',
                'buttonId_calculator',
            );

            Calculator(
                '.content__modal-5',
                'content__modal-calculator-number',
                'content__modal-calculator-operator',
            );
        },
        classSection: 'content__projects',
    },

    {
        title: 'Project 6',
        src: '../image/picture1.png',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        button: 'Look',
        buttonId: 'project6',
        event: () => {
            openAndCloseModal(
                'content__modal-6',
                'modal_quiz',
                'buttonId_quiz',
            );

            ProgrammingGame();
        },
        classSection: 'content__projects',
    },

    {
        title: 'Word Division',
        src: '../image/picture1.png',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        button: 'Look',
        buttonId: 'project6',
        event: () => {
            openAndCloseModal(
                'content__modal-wordDivision',
                'modal_wordDivision',
                'buttonId_wordDivision',
            );

            new WordDivision('.content__modal-wordDivision', 'Word Division', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s');
        },
        classSection: 'content__projects',
    },

    {
        title: 'Vending machine with drinks',
        src: '../image/picture1.png',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        button: 'Look',
        buttonId: 'project7',
        event: () => {
            openAndCloseModal(
                'content__modal-vending',
                'modal_vending',
                'buttonId_vending',
            );

            new VendingMachine('.content__modal-vending', 'Vending machine', 'Choose a drink')

        },
        classSection: 'content__projects',
    },


];

export const tile: string[] = ['home', 'project', 'contact'];
