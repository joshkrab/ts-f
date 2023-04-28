const arr: number[] = []; // Array of numbers
const matrix: number[][] = [[], []]; // Array of arrays

const arr2: (number | string)[] = [1, 'gfg'];

// Tuple - кортеж: 
const coordinates: [number, number] = [23412.21, 552345.77];
// Приклад:
let x: [string, number]; // Declarе - оголосили змінну
x = ['stroka', 12]; // Ok
// x = [12, 12]; // Error

// Масиви: різні типи створення:
const arrT: number[] = [1,2,5]; 
const arrT2: Array<number> = [1,2,5]; // Generic array type
const arrT3: ReadonlyArray<number> = [1, 2, 5]; // Не зможемо змінювати