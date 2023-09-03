import Modal from '../Projects/Project/Modal';

export default function openAndCloseModal() {
    Modal(
        'content__modal',
        'myModal',
        'content__modal-content',
        'content__modal-content-close',
        'closeModalBtn',
        '&times;',
        'To jest text modala',
    );

    const modal = document.getElementById('myModal')! as HTMLDivElement;

    console.log(modal.style.display);

    const button = document.getElementById(
        'closeModalBtn',
    )! as HTMLButtonElement;
    console.log(button);

    if (modal.style.display === 'none') {
        modal.style.display = 'block';
    }

    button.addEventListener('click', () => {
        modal.style.display = 'none';
    });
}
