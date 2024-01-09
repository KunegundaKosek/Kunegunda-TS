import { ClickerData } from '../../../intefaces/dataClicker-interface';
import { Project } from '../Project';
import { squares } from './dataClicker';

export class Clicker extends Project {
    private h4: HTMLHeadingElement;
    private squaresContainer: HTMLDivElement;
    private initialValue: number = 0;
    // private containerInputElement: HTMLDivElement;
    private operatorInput: HTMLSelectElement;
    private numberInput: HTMLInputElement;
    private selectedOperator: string = '+'; // 

    constructor(
        modalContentSelector: string,
        h1Txt: string,
        pTxt: string,
        h4ClassName: string,
    ) {
        super(modalContentSelector, h1Txt, pTxt);
        this.h4 = this.createHeadingElement(h4ClassName, 'h4');
        this.initialValue = 0;

        this.squaresContainer = this.createSquaresContainer();
        this.div.appendChild(this.h4);

        this.operatorInput = this.createOperatorInput();
        this.numberInput = this.createNumberInput();

        // this.containerInputElement = document.createElement(
        //     'div',
        // ) as HTMLDivElement;
        // this.containerInputElement.className =
        //     'content__modal-clicker-inputContainer';
        // this.containerInputElement.appendChild(this.createOperatorInput());

        // this.containerInputElement.appendChild(this.createNumberInput());

        // this.div.appendChild(this.containerInputElement);

        this.setupUserInput();

        this.div.appendChild(this.squaresContainer);
        this.setupSquares();
    }

    private setupSquares(): void {
        squares.forEach((square) => {
            const divSquare = this.createSquareElement(square);
            divSquare.addEventListener('click', () => {
                this.handleSquareClick(square);
            });
            this.h4.textContent = this.initialValue.toString();
            this.squaresContainer.appendChild(divSquare);
        });
    }

    private createSquareElement(square: ClickerData): HTMLDivElement {
        const divSquare = document.createElement(
            square.element,
        ) as HTMLDivElement;
        divSquare.className = square.className;

        if (square.className === 'content__modal-clicker-square') {
            divSquare.appendChild(this.operatorInput);
            divSquare.appendChild(this.numberInput);
        }

        divSquare.textContent = `${square.operator}${square.number}`;
        return divSquare;
    }

    private createSquaresContainer(): HTMLDivElement {
        const container = document.createElement('div');
        container.className = 'content__modal-clicker-container';
        return container;
    }

    private handleSquareClick(square: ClickerData): void {
        switch (square.operator) {
            case '+':
                this.initialValue += square.number;
                break;
            case '-':
                this.initialValue -= square.number;
                break;
            case '*':
                this.initialValue *= square.number;
                break;
            case '/':
                this.initialValue /= square.number;
                break;
        }

        this.h4.textContent = this.initialValue.toString();
    }

    private createOperatorInput(): HTMLSelectElement {
        const select = document.createElement('select') as HTMLSelectElement;
        select.id = 'operatorInput';
        const operators = ['+', '-', '/', '*'];

        operators.forEach((operator) => {
            const option = document.createElement('option');
            option.value = operator;
            option.textContent = operator;
            select.appendChild(option);
        });

        // Nasłuchuj zmiany wybranej opcji
        select.addEventListener('change', () => {
            this.selectedOperator = select.value;
        });

        return select;
    }

    private createNumberInput(): HTMLInputElement {
        const input = document.createElement('input') as HTMLInputElement;
        input.id = 'numberInput';
        input.type = 'number';
        input.value = ''
        input.placeholder = 'Enter a number';

        return input;
    }

    private setupUserInput(): void {
        const calculateButton = document.createElement('button');
        calculateButton.textContent = 'Calculate';
        calculateButton.addEventListener('click', () => {
            const inputText = this.numberInput.value.trim();
            const inputNumber = Number(inputText);

            if (!isNaN(inputNumber)) {
                switch (this.selectedOperator) {
                    case '+':
                        this.initialValue += inputNumber;
                        break;
                    case '-':
                        this.initialValue -= inputNumber;
                        break;
                    case '*':
                        this.initialValue *= inputNumber;
                        break;
                    case '/':
                        if (inputNumber !== 0) {
                            this.initialValue /= inputNumber;
                        } else {
                            alert('Division by zero is not allowed.');
                        }
                        break;
                    default:
                        alert('Invalid operator selected.');
                }

                this.h4.textContent = this.initialValue.toString();
            } else {
                alert('Please enter a valid number.');
            }
        });

        // this.containerInputElement.appendChild(calculateButton);
    }
}
