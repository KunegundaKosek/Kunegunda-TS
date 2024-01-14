import { Vending } from '../../../../intefaces/Vending';
import { Project } from '../Project';

export class VendingMachine extends Project {
    private containerButton: HTMLDivElement;
    private saldo: HTMLParagraphElement;
    private money: number;
    private pInfoChoose: HTMLParagraphElement;
    private pInfoShow: HTMLParagraphElement;

    constructor(modalContentSelector: string, h1Txt: string, pTxt: string) {
        super(modalContentSelector, h1Txt, pTxt);

        this.containerButton = document.createElement('div');
        this.saldo = document.createElement('p');
        this.money = 20;
        this.pInfoChoose = document.createElement('p');
        this.pInfoShow = document.createElement('p');
        this.pInfoShow.className = 'content__modal-vending-lack';

        this.div.append(
            this.containerButton,
            this.saldo,
            this.pInfoChoose,
            this.pInfoShow,
        );

        this.setupDrinkButton();
    }

    private setupDrinkButton() {
        this.saldo.textContent = `Funds status: ${this.money.toFixed(2)}zł`;
        drinks.forEach((item) => {
            const button: HTMLButtonElement = document.createElement('button');
            button.textContent = `${item.id} - ${item.price.toFixed(2)}zł`;
            button.id = `${item.name.toLowerCase()}${item.id}`;
            console.log(button.id);
            this.containerButton.appendChild(button);

            button.addEventListener('click', () => {
                this.handleButtonClick(item, button);
            });
        });
    }

    private handleButtonClick(item: Vending, button: HTMLButtonElement) {
        if (this.money >= item.price && item.quantity > 0) {
            this.money -= item.price;
            item.quantity--;
            console.log(item.quantity);

            this.pInfoShow.textContent = '';

            this.pInfoChoose.textContent = `You chose ${item.name}`;
            this.saldo.textContent = `Funds status: ${this.money.toFixed(2)}zł`;
        } else if (item.quantity === 0) {
            button.textContent = 'LACK';
            button.disabled = true;
            this.pInfoShow.textContent = 'No drink in the machine';
        } else if (this.money < item.price) {
            this.pInfoShow.textContent = 'Not enough money';
        }
    }
}

const drinks: Vending[] = [
    {
        id: 0,
        name: 'Tea',
        price: 5.4,
        quantity: 10,
    },
    {
        id: 1,
        name: 'Coffe',
        price: 6.87,
        quantity: 4,
    },
    {
        id: 2,
        name: 'Pepsi',
        price: 9.9,
        quantity: 1,
    },
    {
        id: 3,
        name: 'Water',
        price: 1,
        quantity: 20,
    },
];
