import Modal from "../components/Projects/Project/Modal";

export default function openAndCloseModal(className: string, id: string, buttonId: string) {

    new Modal(
        'content__modal',
        id,
        className,
        'content__modal-close fa-regular fa-circle-xmark',
        buttonId,
    );


    const modal = document.getElementById(id)! as HTMLDivElement;

    const button = document.getElementById(
        buttonId
    )! as HTMLButtonElement;

    if (modal.style.display === 'none') {
        modal.style.display = 'block';
    }

    button.addEventListener('click', () => {
        modal.remove();
    });

}
