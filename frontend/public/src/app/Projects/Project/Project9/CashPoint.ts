import { CardType } from '../../../intefaces/CardType';

const cards: CardType[] = [
    {
        id: 0,
        name: 'Brown Card',
        saldo: 500,
        pin: '1234',
        className: 'content__modal-cashpoint-cardBtn',
    },

    {
        id: 1,
        name: 'Silver Card',
        saldo: 2000,
        pin: '1234',
        className: 'content__modal-cashpoint-cardBtn',
    },

    {
        id: 2,
        name: 'Gold Card',
        saldo: 10000,
        pin: '1234',
        className: 'content__modal-cashpoint-cardBtn',
    },
];

export function CashPoint(divClassName: string) {
    const cardBox: HTMLDivElement = document.createElement('div');
    cardBox.className = 'content__modal-cashpoint-box';
    const div = document.querySelector(divClassName) as HTMLDivElement;

    const display: HTMLDivElement = document.createElement('div');
    const containerOption: HTMLDivElement = document.createElement('div');
    display.className = 'content__modal-cashpoint-display';

    //
    const input: HTMLInputElement = document.createElement('input');
    input.type = 'password';
    input.id = 'pin';
    input.disabled = true;
    const button: HTMLInputElement = document.createElement('input');
    button.value = 'OK';
    button.id = 'btnOK';
    button.type = 'button';
    button.disabled = true;

    function updateSaldo(cardId: number, newSaldo: number) {
        const cardToUpdate = cards.find((card) => card.id === cardId);

        if (cardToUpdate) {
            cardToUpdate.saldo = newSaldo;
        } else {
        }
    }

    //     const btnOK = document.getElementById('btnOK') as HTMLInputElement;

    //     const buttonOK = document.getElementById('btnOK') as HTMLInputElement;

    div.append(input, button);

    //

    cards.forEach((card) => {
        const button: HTMLButtonElement = document.createElement('button');
        button.textContent = card.name;
        button.className = card.className;
        button.id = `${card.id}`;
        cardBox.appendChild(button);

        div.append(cardBox);

        button.addEventListener('click', () => {
            cashPointInfo.textContent = `Wybrałeś ${card.name}`;
            saldoInfo.style.display = 'block';
            saldoInfo.textContent = `SALDO: ${card.saldo}zł`;

            const buttonAll = document.querySelectorAll(
                '.content__modal-cashpoint-cardBtn',
            )! as NodeListOf<HTMLButtonElement>;
            buttonAll.forEach((btn) => {
                btn.disabled = true;
            });

            // wypłać
            const payment: HTMLDivElement = document.createElement('div');
            payment.className = 'content__modal-cashback-cardOption';
            payment.id = 'payment';
            payment.textContent = 'CASH DEPOSIT';
            payment.id = 'payment';

            // wpłać
            const paycheck: HTMLDivElement = document.createElement('div');
            paycheck.className = 'content__modal-cashback-cardOption';
            paycheck.textContent = 'CASH WITHDRAWAL';
            paycheck.id = 'paycheck';

            const PINChange: HTMLDivElement = document.createElement('div');
            PINChange.className = 'content__modal-cashback-cardOption';
            PINChange.id = 'pinChange';
            PINChange.textContent = 'PIN CHANGE';

            function cashPointOperation(
                payment: HTMLDivElement,
                paycheck: HTMLDivElement,
                PINChange: HTMLDivElement,
                cashPointInfo: HTMLParagraphElement,
                card: CardType,
                cashPointInfoTXT: string,
            ) {
                let errorPIN: number = 0;
                payment.style.display = 'none';
                paycheck.style.display = 'none';
                PINChange.style.display = 'none';

                cashPointInfo.textContent = 'ENTER PIN';
                console.log('Czy to działa?');

                const input = document.querySelector(
                    'input',
                ) as HTMLInputElement;
                const btn = document.getElementById(
                    'btnOK',
                ) as HTMLButtonElement;

                btn.addEventListener('click', () => {
                    let inputValue = Number(input.value);

                    // dlatego bo inputValue jest pusty;

                    if (inputValue === 0) {
                        inputValue = 1234;
                    } else {
                        if (inputValue === Number(card.pin)) {
                              console.log('1');
                            if (payment.id === 'payment') {
                              console.log('111111111111111')
                              console.log(payment.id === 'payment');
                              console.log(payment.id);

                                saldoInfo.style.display = 'block';
                                cashPointInfo.textContent = cashPointInfoTXT;

                                const inputCashDeposit: HTMLInputElement =
                                    document.createElement('input');
                                inputCashDeposit.type = 'number';

                                const btnCashDeposit: HTMLInputElement =
                                    document.createElement('input');
                                btnCashDeposit.type = 'button';
                                btnCashDeposit.value = 'OK';
                                btnCashDeposit.id = 'btnCashDeposit';

                                btnCashDeposit.addEventListener('click', () => {
                                    inputCashDeposit.style.display = 'none';
                                    btnCashDeposit.style.display = 'none';

                                    if (
                                        Number(inputCashDeposit.value) % 10 ===
                                        0
                                    ) {
                                        if (
                                            Number(inputCashDeposit.value) <=
                                            card.saldo
                                        ) {
                                            cashPointInfo.textContent = `Wypłaciłeś ${inputCashDeposit.value}zł`;
                                            const actualSaldo: number =
                                                card.saldo -
                                                Number(inputCashDeposit.value);
                                            saldoInfo.textContent = `SALDO: ${actualSaldo}zł`;
                                            const cardId: number = card.id;

                                            updateSaldo(cardId, actualSaldo);

                                            setTimeout(() => {
                                                // cashPointInfo.style.display = 'none';
                                                saldoInfo.style.display =
                                                    'none';

                                                setTimeout(() => {
                                                    cashPointInfo.textContent =
                                                        'Wybierz kartę';
                                                    for (let btn of buttonAll) {
                                                        btn.disabled = false;
                                                    }
                                                }, 1000);
                                            }, 3000);
                                        } else {
                                            cashPointInfo.textContent =
                                                'Brak środków na koncie';
                                            setTimeout(() => {
                                                // cashPointInfo.style.display = 'none';
                                                saldoInfo.style.display =
                                                    'none';

                                                setTimeout(() => {
                                                    cashPointInfo.textContent =
                                                        'Wybierz kartę';
                                                    for (let btn of buttonAll) {
                                                        btn.disabled = false;
                                                    }
                                                }, 1000);
                                            }, 3000);
                                        }
                                    } else {
                                        cashPointInfo.textContent =
                                            'Wypłacana kwota musi być wielokrotnością liczy 10';
                                        cashPointInfo.style.color = 'red';

                                        setTimeout(() => {
                                            // cashPointInfo.style.display = 'none';
                                            saldoInfo.style.display = 'none';
                                            cashPointInfo.style.color = 'black';

                                            setTimeout(() => {
                                                cashPointInfo.textContent =
                                                    'Wybierz kartę';
                                                for (let btn of buttonAll) {
                                                    btn.disabled = false;
                                                }
                                            }, 1000);
                                        }, 3000);
                                    }
                                });
                                display.append(
                                    inputCashDeposit,
                                    btnCashDeposit,
                                );
                            } else if (paycheck.id === 'paycheck') {
                                console.log('paycheck id');
                            } else if (PINChange.id === 'pinChange') {
                              console.log('pinCHange')
                            }

                            input.setAttribute('disabled', 'true');

                            const buttonOK = document.getElementById(
                                'btnOK',
                            ) as HTMLInputElement;
                            buttonOK.setAttribute('disabled', 'true');

                            //     cashPointInfo.textContent = 'Podaj kwotę wypłaty';
                        } else if (inputValue !== Number(card.pin)) {
                            errorPIN++;
                            cashPointInfo.textContent = 'Nieprawidłowy PIN';

                            if (errorPIN >= 3) {
                                saldoInfo.style.display = 'none';
                                cashPointInfo.textContent = `Karta została zablokowana`;

                                setTimeout(() => {
                                    cashPointInfo.textContent = '';

                                    setTimeout(() => {
                                        cashPointInfo.textContent =
                                            'Wybierz kartę';
                                        for (let btn of buttonAll) {
                                            btn.disabled = false;
                                        }

                                        input.style.display = 'inline';
                                        input.setAttribute('disabled', 'true');
                                        btn.style.display = 'inline';
                                        btn.setAttribute('disabled', 'true');

                                        errorPIN = 0;
                                    }, 3000);
                                }, 3000);
                            }
                        } else {
                        }
                    }

                    input.value = '';
                });
            }

            const buttonOK = document.getElementById(
                'btnOK',
            ) as HTMLInputElement;

            payment.addEventListener('click', () => {
                input.removeAttribute('disabled');
                if (buttonOK.hasAttribute('disabled')) {
                    buttonOK.removeAttribute('disabled');
                }

                cashPointOperation(
                    payment,
                    paycheck,
                    PINChange,
                    cashPointInfo,
                    card,
                    'Podaj kwotę wypłaty',
                );
            });

            paycheck.addEventListener('click', () => {
                  console.log('paycheck click')
                input.removeAttribute('disabled');
                if (buttonOK.hasAttribute('disabled')) {
                    buttonOK.removeAttribute('disabled');
                }

                cashPointOperation(
                    payment,
                    paycheck,
                    PINChange,
                    cashPointInfo,
                    card,
                    'Podaj kwotę wpłaty123123',
                );
            });

            PINChange.addEventListener('click', () => {
                input.removeAttribute('disabled');
                if (buttonOK.hasAttribute('disabled')) {
                    buttonOK.removeAttribute('disabled');
                }

                cashPointOperation(
                    payment,
                    paycheck,
                    PINChange,
                    cashPointInfo,
                    card,
                    'Zmiana PINU, wpisz nowy',
                );
            });

            containerOption.append(payment, paycheck, PINChange);
        });
    });

    const cashPointInfo: HTMLParagraphElement = document.createElement('p');
    cashPointInfo.textContent = 'Wybierz kartę';
    const saldoInfo: HTMLParagraphElement = document.createElement('p');
    saldoInfo.style.display = 'none';
    display.append(cashPointInfo, saldoInfo, containerOption);
    div.append(display);
}
