import Modal from '../Projects/Project/Modal';

export default function openAndCloseModal() {
    new Modal(
        'content__modal',
        'myModal',
        'content__modal-content',
        'content__modal-close fa-regular fa-circle-xmark',
        'closeModalBtn',
    );

    const modal = document.getElementById('myModal')! as HTMLDivElement;

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
