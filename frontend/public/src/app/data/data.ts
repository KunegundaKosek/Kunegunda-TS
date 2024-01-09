import { ProjectData } from '../intefaces/data-interface';
import openAndCloseModal from './function-button-project';
import { MousePositionController } from '../Projects/Project/Project1/MousePosition';
import { AddingOnClick } from '../Projects/Project/Project3/AddingOnClick';
import { Clicker } from '../Projects/Project/Project2/Clicker';
import { ResizableText } from '../Projects/Project/Project4/ResizableText';
import { WordDivision } from '../Projects/Project/Project7/WordDivision';
import { VendingMachine } from '../Projects/Project/Project8/VendingMachine';
import { CashPoint } from '../Projects/Project/Project9/CashPoint';
import { Converter } from '../Projects/Project/Project10/Converter';

export const data: ProjectData[] = [
    {
        title: 'Dynamic Mouse-Position-Based Background Color Changer',
        src: '../image/MousePosition.png',
        text: 'This simple yet engaging application transforms your desktop experience by responding to the real-time movement of the mouse, creating a unique and personalized display. Explore the seamless transition of colors as you navigate, adding an interactive and visually appealing touch to your computing environment.',
        button: 'Look',
        buttonId: 'project1',
        event: () => {
            openAndCloseModal('content__modal-1', 'modal_1', 'buttonId_1');

            new MousePositionController(
                '.content__modal-1',
                'MousePosition',
                'Move the cursor across the screen to change the background color.',
                'content__modal-mousePosition-h4',
                'h4',
            );
        },
        classSection: 'content__projects',
    },

    {
        title: 'Interactive Clicker App',
        src: '../image/Clicker.png',
        text: 'A captivating and straightforward application that turns every click into a dynamic mathematical operation. Each element within the designated square bears a numeric value, and upon clicking, the app instantly performs the corresponding operation on the cumulative total displayed at the top. Immerse yourself in an engaging clicker experience that not only keeps track of your actions but also challenges you to strategically accumulate points. ',
        button: 'Look',
        buttonId: 'project2',
        event: () => {
            openAndCloseModal('content__modal-2', 'modal_2', 'buttonId_2');

            new Clicker(
                '.content__modal-2',
                'Clicker',
                '',
                'content__modal-clicker-h4',
            );
        },
        classSection: 'content__projects',
    },

    {
        title: ' Dynamic Number Display App',
        src: '../image/AddingOnClick.png',
        text: 'With each button click, a series of numbers unfolds on your screen. What sets this app apart is its intriguing twist – whenever a displayed number is divisible by 5, its appearance transforms.',
        button: 'Look',
        buttonId: 'project3',
        event: () => {
            openAndCloseModal('content__modal-3', 'modal_3', 'buttonId_3');

            new AddingOnClick(
                '.content__modal-3',
                'Adding on click',
                '',
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
        title: 'Text Size Modifier App',
        src: '../image/ResizableText.png',
        text: 'Introducing the Text Size Modifier App, where every click on the "Plus 1px" button elevates the text size by 1 pixel. Designed for precision, this application allows you to finely adjust the text size according to your preferences. Additionally, you have the flexibility to set the text size to a base value of 10 pixels. ',
        button: 'Look',
        buttonId: 'project4',
        event: () => {
            openAndCloseModal('content__modal-4', 'modal_4', 'buttonId_4');
            new ResizableText(
                '.content__modal-4',
                'Resizable Text',
                '',
                'content__modal-resizableText-ul',
                'Plus 1px',
                'Size 10px',
                'content__modal-resizableText-btn',
            );
        },
        classSection: 'content__projects',
    },

    // {
    //     title: 'Calculator',
    //     src: '../image/picture1.png',
    //     text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    //     button: 'Look',
    //     buttonId: 'project5',
    //     event: () => {
    //         openAndCloseModal(
    //             'content__modal-5',
    //             'modal_calculator',
    //             'buttonId_calculator',
    //         );

    //         Calculator(
    //             '.content__modal-5',
    //             'content__modal-calculator-number',
    //             'content__modal-calculator-operator',
    //         );
    //     },
    //     classSection: 'content__projects',
    // },

    // {
    //     title: 'Programming game',
    //     src: '../image/picture1.png',
    //     text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    //     button: 'Look',
    //     buttonId: 'project6',
    //     event: () => {
    //         openAndCloseModal(
    //             'content__modal-6',
    //             'modal_quiz',
    //             'buttonId_quiz',
    //         );

    //         Quiz();
    //     },
    //     classSection: 'content__projects',
    // },

    {
        title: 'Word Division',
        src: '../image/WordDivision.png',
        text: 'A program that takes user input as text and then performs an analysis of the frequency of each word. The program divides the text into words, regardless of letter case, calculates the occurrence of each word, and presents the results in the console in alphabetical order. This project enables quick text analysis and identification of the most frequently used words, without considering letter case.',
        button: 'Look',
        buttonId: 'project6',
        event: () => {
            openAndCloseModal(
                'content__modal-wordDivision',
                'modal_wordDivision',
                'buttonId_wordDivision',
            );

            new WordDivision(
                '.content__modal-wordDivision',
                'Word Division',
                '',
            );
        },
        classSection: 'content__projects',
    },

    {
        title: 'Vending machine with drinks',
        src: '../image/VendingMachine.png',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        button: 'Look',
        buttonId: 'project7',
        event: () => {
            openAndCloseModal(
                'content__modal-vending',
                'modal_vending',
                'buttonId_vending',
            );

            new VendingMachine(
                '.content__modal-vending',
                'Vending machine',
                'Choose a drink',
            );
        },
        classSection: 'content__projects',
    },

    {
        title: 'Dynamic Unit Converter: Effortless Conversions Across Multiple Unit Categories',
        src: '../image/Converter.png',
        text: 'This mini project utilizes the "convert-units" library to create a unit converter. The user inputs a numerical value, and the application converts it into various units. The supported unit categories include Length, Area, Mass, Volume, Temperature, Time and Speed.  The application dynamically displays the converted values for all units within the selected category, offering a versatile and user-friendly unit conversion tool.',
        button: 'Look',
        buttonId: 'project7',
        event: () => {
            openAndCloseModal(
                'content__modal-converter',
                'modal_converter',
                'buttonId_converter',
            );

            new Converter('.content__modal-converter', 'Wybierz jednostkę', '');
        },
        classSection: 'content__projects',
    },

    {
        title: 'ATM App - Your All-in-One Banking Solution',
        src: '../image/CashPoint.png',
        text: 'With this application, you can make deposits, withdraw cash, and update your PIN, providing full control over your accounts. Choose from three different card options, each tailored to various financial needs.',
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
];

export const tile: string[] = ['home', 'project', 'contact'];
