import { ObjWithUnits } from '../../../intefaces/Converter';


export const arrayGroupUnits: string[] = [
    'Length',
    'Area',
    'Mass',
    'Volume',
    'Temperature',
    'Time',
    'Speed',
];

export const units: ObjWithUnits = {
    Length: {
        type: ['mm', 'cm', 'm', 'in', 'ft-us', 'ft', 'mi'],
    },

    Area: {
        type: ['mm2', 'cm2', 'm2', 'ha', 'km2'],
    },

    Mass: {
        type: ['mg', 'g', 'kg', 't'],
    },

    Volume: {
        type: ['mm3', 'cm3', 'ml', 'l', 'm3', 'km3'],
    },

    Temperature: {
        type: ['C', 'F', 'K', 'R'],
    },

    Time: {
        type: ['ms', 's', 'min', 'h', 'd', 'week', 'month', 'year'],
    },

    Speed: {
        type: ['m/s', 'km/h', 'm/h'],
    },
};
export const infoDiv = [
    {
        name: 'Length',
        className: 'content__modal-converter-div',
    },

    {
        name: 'Area',
        className: 'content__modal-converter-div',
    },

    {
        name: 'Mass',
        className: 'content__modal-converter-div',
    },

    {
        name: 'Volume',
        className: 'content__modal-converter-div',
    },

    {
        name: 'Temperature',
        className: 'content__modal-converter-div',
    },

    {
        name: 'Time',
        className: 'content__modal-converter-div',
    },

    {
        name: 'Speed',
        className: 'content__modal-converter-div',
    },
];
