import convert from 'convert-units';

export default function Units(
    unit1: convert.Unit,
    unit2: convert.Unit,
    idInput: string,
    idConverterBox: string,
) {
    const p1: HTMLParagraphElement = document.createElement('p');
    const input = document.getElementById(idInput)! as HTMLInputElement;
    const converterBox = document.getElementById(idConverterBox)! as HTMLDivElement;
    input.addEventListener('input', () => {
        const mmToCm: string = convert(Number(input.value))
            .from(unit1)
            .to(unit2)
            .toString();
        p1.innerHTML = `<b>${input.value}</b> ${unit1} to <b>${Number(
            mmToCm,
        ).toFixed(3)}${unit2}</b>`;
    });

    converterBox.appendChild(p1);
}
