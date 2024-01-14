import { Unit } from 'convert-units';
import Units from './Units';
import { arrayGroupUnits, infoDiv, units } from './ConverterData';
import { Project } from '../Project';

export class Converter extends Project {
    private converterBox: HTMLDivElement;

    constructor(modalContentSelector: string, h1Txt: string, pTxt: string) {
        super(modalContentSelector, h1Txt, pTxt);
        this.converterBox = this.createConverterBox();
        this.createInfoDiv();
        this.createUnits();
    }

    private createConverterBox(): HTMLDivElement {
        const converterBox = document.createElement('div');
        converterBox.className = 'content__modal-converter-converterBox';
        this.div.appendChild(converterBox);
        return converterBox;
    }

    private createInfoDiv(): void {
        infoDiv.forEach((el) => {
            const div = document.createElement('div');
            div.className = el.className;
            div.id = `${el.name}1`;

            const h3 = document.createElement('h3');
            h3.textContent = el.name;

            const input = document.createElement('input');
            input.type = 'number';
            input.id = el.name;

            const p1 = document.createElement('p');
            p1.id = 'p1';
            const p2 = document.createElement('p');
            p2.id = 'p2';
            const p3 = document.createElement('p');
            p3.id = 'p3';

            div.append(h3, input, p1, p2, p3);
            this.converterBox.appendChild(div);
        });
    }

    private createUnits(): void {
        arrayGroupUnits.forEach((el) => {
            if (el) {
                for (let i = 0; i < units[el].type.length; i++) {
                    for (let j = 0; j < units[el].type.length; j++) {
                        if (i !== j) {
                            const unit1: Unit = units[el].type[i] as Unit;
                            const unit2: Unit = units[el].type[j] as Unit;
                            Units(unit1, unit2, el, `${el}1`);
                            console.log(
                                `${units[el].type[i]} - ${units[el].type[j]}`,
                            );
                        }
                    }
                }
            }
        });
    }
}
