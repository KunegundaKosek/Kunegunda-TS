export function Calculator(divClassName: string, numberClassName: string, operatorClassName: string) {
    const div = document.querySelector(
        divClassName,
    )! as HTMLDivElement;

    const numbers: number[] = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    const operators: string[] = ['+', '-', '*', '/'];
    const calculatorContainer: HTMLDivElement = document.createElement('div');
    calculatorContainer.className = 'content__modal-calculator';
    div.appendChild(calculatorContainer);

    numbers.forEach((number) => {
        const btnNumber: HTMLDivElement = document.createElement('div');
        btnNumber.className = numberClassName;
        btnNumber.textContent = number.toString();
        calculatorContainer.appendChild(btnNumber);
    });

    operators.forEach((operator) => {
        const btnOperator: HTMLDivElement = document.createElement('div');
        btnOperator.className = operatorClassName;
        btnOperator.textContent = operator;
        calculatorContainer.appendChild(btnOperator);
    });
}
