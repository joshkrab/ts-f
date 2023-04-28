"use strict";
;
// Коли хочемо взяти не усі властивості з інтерфейсу, якщо в нас чогось не вистачає:
const myAccomodation = {
    title: 'go',
    address: 'rrr'
};
// Коли хочемо взяти не усі властивості з інтерфейсу - навпаки вказуюємо які не брати:
const myAccomodation2 = {
    location: 'go',
    countOfRooms: 12,
};
const myFloatAccom = {}; // Усі властивості не обов'язкові
const myReqAccom = {
    title: 'string',
    location: 'string',
    address: 'string',
    countOfRooms: 11,
}; // Усі властивості не обов'язкові, навіть які ? в інтерфейсі
;
const cats = {
    miffy: { age: 12, breed: 'pink' },
    boris: { age: 12, breed: 'pink' },
    mordred: { age: 12, breed: 'pink' },
};
// Масиви: різні типи створення:
const arrr = [1, 2, 5];
const arrr2 = [1, 2, 5];
const arrr3 = [1, 2, 5]; // Не зможемо змінювати
//# sourceMappingURL=utility-types.js.map