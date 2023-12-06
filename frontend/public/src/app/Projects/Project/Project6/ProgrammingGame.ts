export function ProgrammingGame() {
    const div = document.querySelector('.content__modal-6') as HTMLDivElement;

    const h1: HTMLHeadingElement = document.createElement('h1');
    h1.textContent = 'PROGRAMING GAME';

    const h2: HTMLHeadingElement = document.createElement('h2');
    h2.id = 'h2';
    h2.textContent = 'Poprawne odpowiedzi: ';

    const span: HTMLSpanElement = document.createElement('span');
    span.id = 'good-answers';
    span.textContent = '0';

    const divGameBoard: HTMLDivElement = document.createElement('div');
    divGameBoard.id = 'game-board';

    const divQuestion: HTMLDivElement = document.createElement('div');
    divQuestion.id = 'question';

    div.append(h1, h2, span);

    interface Buttons {
        element: string;
        id: string;
        text?: string;
        class?: string;
    }

    const btnHelp: Buttons[] = [
        {
            element: 'button',
            id: `callToAFriend`,
            text: 'Telefon do Przyjaciela',
        },

        {
            element: 'button',
            id: `halfOnHalf`,
            text: 'Pół na pół',
        },

        {
            element: 'button',
            id: `questionToTheCrowd`,
            text: 'Pytanie do publiczności',
        },
    ];

    btnHelp.map((button) => {
        const btn: HTMLButtonElement = document.createElement('button');
        btn.id = button.id;
        if (button.text !== undefined) {
            btn.textContent = button.text;
        }
        divGameBoard.appendChild(btn);
    });
    // ZMIENIĆ NA i++ I ZMIENIĆ POPRAWNE ODPOWIEDZI

    const btnInfo: Buttons[] = [
        {
            element: 'button',
            id: `answer0`,
            class: 'answer-button',
        },
        {
            element: 'button',
            id: `answer1`,
            class: 'answer-button',
        },
        {
            element: 'button',
            id: `answer2`,
            class: 'answer-button',
        },
        {
            element: 'button',
            id: `answer3`,
            class: 'answer-button',
        },
    ];

    divGameBoard.append(divQuestion);
    btnInfo.map((button) => {
        const btn = document.createElement('button');
        btn.id = button.id;
        if (button.class !== undefined) {
            btn.className = button.class;
        }
        const dataAnswer = button.id;
        btn.setAttribute('data-answer', dataAnswer.slice(6, 7));
        divGameBoard.appendChild(btn);
    });

    const tip: HTMLDivElement = document.createElement('div');
    tip.id = 'tip';
    div.appendChild(divGameBoard);
    div.appendChild(tip);

    const question = document.querySelector('#question') as HTMLDivElement;

    function fillQuestionElements(data: any) {
        const gameBoard = document.querySelector(
            '#game-board',
        ) as HTMLDivElement;
        const h2 = document.querySelector('#h2') as HTMLHeadingElement;

        /////////
        if (data.winner === true) {
            gameBoard.style.display = 'none';
            h2.innerText = 'WYGRAŁEŚ/AŚ!!!';
            return;
        }

        if (data.loser === true) {
            gameBoard.style.display = 'none';
            h2.innerText = 'Nie poszło tym razem, spróbuj ponownie.';
            return;
        }

        question.innerText = data.question;

        for (const i in data.answers) {
            console.log(i);
            const answerEl = document.querySelector(
                `#answer${Number(i)}`,
            ) as HTMLButtonElement;

            answerEl.innerText = data.answers[i];
        }
    }

    function showNextQuestion() {
        fetch('/question', {
            method: 'GET',
        })
            .then((r) => r.json())
            .then((data) => {
                fillQuestionElements(data);
            });
    }

    showNextQuestion();

    const goodAnswerSpan = document.querySelector(
        '#good-answers',
    ) as HTMLSpanElement;

    // interface handleAnswerFeedback {
    //     correct: boolean,
    //     goodAnswer: number,
    // }

    function handleAnswerFeedback(data: any) {
        goodAnswerSpan.innerText = data.goodAnswers;

        showNextQuestion();
    }

    function sendAnswer(answerIndex: any) {
        fetch(`/answer/${answerIndex}`, {
            method: 'POST',
        })
            .then((r) => r.json())
            .then((data) => {
                handleAnswerFeedback(data);
            });
    }

    const buttons: NodeListOf<HTMLButtonElement> =
        document.querySelectorAll('.answer-button');

    for (const button of buttons) {
        button.addEventListener('click', (event: MouseEvent) => {
            if (event.target) {
                const target = event.target as HTMLElement;
                const answerIndex = target.dataset.answer;
                if (answerIndex) {
                    sendAnswer(answerIndex);
                }
            }
        });
    }

    const tipDiv = document.querySelector('#tip') as HTMLDivElement;
    function handleFriendsAnswer(data: any) {
        tipDiv.innerText = data.text;
    }

    function callToAFriend() {
        fetch('/help/friend', {
            method: 'GET',
        })
            .then((r) => r.json())
            .then((data) => {
                handleFriendsAnswer(data);
            });
    }

    document
        .querySelector('#callToAFriend')
        ?.addEventListener('click', callToAFriend);

    function handleHalfOnHalfAnswer(data: any) {
        if (typeof data.text === 'string') {
            tipDiv.innerText = data.text;
        } else {
            for (const button of buttons) {
                if (data.answersToRemove.indexOf(button.innerText) > -1) {
                    button.innerText = '';
                }
            }
        }
    }

    function halfOnHalf() {
        fetch('/help/half', {
            method: 'GET',
        })
            .then((r) => r.json())
            .then((data) => {
                console.log(data);
                handleHalfOnHalfAnswer(data);
            });
    }

    document
        .querySelector('#halfOnHalf')
        ?.addEventListener('click', halfOnHalf);


    function handleCrowdAnswer(data: any) {
        console.log(data)
        if(typeof data.text === 'string') {
            tipDiv.innerText = data.text;
        } else {
            // data.chart.forEach((percent, index) => {
            //     buttons[index].innerText = `${buttons[index].innerText}: ${percent}%`;
            // });
        }
    }

    function questionToTheCrowd() {
        fetch('/help/crowd', {
            method: 'GET',
        })
        .then(r => r.json())
        .then(data => {
            console.log(data);
            handleCrowdAnswer(data); 
        })
    }

    document.querySelector('#questionToTheCrowd')?.addEventListener('click', questionToTheCrowd)
}
