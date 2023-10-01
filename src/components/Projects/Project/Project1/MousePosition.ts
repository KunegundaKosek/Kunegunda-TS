// 1. dodawanie listenera na body, "mousemove", wyciąganie pozycji myszki (clientX, clientY)
// 2. Pobierz h1 i wyświetl w niej pozycje myszki
// 3. Dodaj zmienne i wyciąg wysokość/szerokość okna przeglądarki za pomocą window.inner width/height
// 3. dodaj styl background na body i dodaj kolor rgb pobrany z eventu

export default function MousePosition(titleText: string, paragraphText: string): void {
    const div = document.querySelector(
        '.content__modal-content',
    )! as HTMLDivElement;

    div.innerHTML = '';

    const h1 = document.createElement('h1');
    h1.textContent = titleText;

    console.log(h1);

    const p: HTMLParagraphElement = document.createElement('p');
    p.textContent = paragraphText;

    div.appendChild(h1);
    div.appendChild(p);

    const h4 = document.createElement('h4');

    div.addEventListener('mousemove', (e) => {
        const mouseX = e.clientX + 1;
        const mouseY = e.clientY + 1;

        const widthWindow = window.innerWidth;
        const heightWindow = window.innerHeight;

        h4.textContent = `${mouseX}   ${mouseY}`;

        const red = (mouseX / widthWindow) * 100;
        const green = (mouseY / heightWindow) * 100;
        const blue =
            (mouseX / widthWindow) * 100 + ((mouseY / heightWindow) * 100) / 2;

        div.style.backgroundColor = `rgb(${red}%, ${green}%, ${blue}%)`;
    });

    div.appendChild(h4);
}
