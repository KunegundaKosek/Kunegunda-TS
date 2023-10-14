import Modal from '../Projects/Project/Modal';

export default function openAndCloseModal(className: string, id: string, buttonId: string) {

    const x = new Modal(
        'content__modal',
        id,
        className,
        'content__modal-close fa-regular fa-circle-xmark',
        buttonId,
    );

    console.log(x);

    const modal = document.getElementById(id)! as HTMLDivElement;

    const button = document.getElementById(
        buttonId,
    )! as HTMLButtonElement;
    console.log(button);

    if (modal.style.display === 'none') {
        modal.style.display = 'block';
    }

    button.addEventListener('click', () => {
        modal.style.display = 'none';
    });

}
