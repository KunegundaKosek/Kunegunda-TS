export default function Modal(divModalClass, divModalId, divModalContentClass, spanClass, spanId, buttonTxt, paragraphTxt) {
    const main = document.querySelector('main');
    console.log(main);
    const divModal = document.createElement('div');
    divModal.className = divModalClass;
    divModal.id = divModalId;
    divModal.style.display = 'none';
    main.appendChild(divModal);
    const divModalContent = document.createElement('div');
    divModalContent.className = divModalContentClass;
    const button = document.createElement('button');
    button.className = spanClass;
    button.id = spanId,
        button.textContent = buttonTxt;
    const p = document.createElement('p');
    p.textContent = paragraphTxt;
    divModalContent.appendChild(button);
    divModalContent.appendChild(p);
    divModal.appendChild(divModalContent);
}
//# sourceMappingURL=Modal.js.map