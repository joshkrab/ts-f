"use strict";
// Generics <Type> - Прокидуємо тип або інтерфейс при виклику функції
// Дінамічне задавання типу в функцію
// Можемо передавати декілька дженериків:
// <UserParams, Type, string, number>
// І потім відповідно при виклику функції їх передавати <{}, UseS, 'fgf', 99 >()
const newUser = {
    name: 'Max',
    surname: 'Bruni',
};
const newArticle = {
    title: 'string',
    author: 'string',
    content: 'string',
};
function makeRequest(url, data, params) {
    let obj = {};
    return obj;
}
;
const myUser = makeRequest('/getUsers', newUser);
const myArticles = makeRequest('/getArticles', newArticle);
const myCustom = {
    name: 12,
    surname: 'Fadivi',
    type: 'record',
};
class Customers {
    constructor(type, name) {
        this.type = type;
        this.name = name;
    }
}
const customers = new Customers('new', 'Nikita');
// Т наслідується від PersonsInfo, за замовчуванням має значення defaultCustomer:
function workWithPerson(arg) {
    return arg.name;
}
workWithPerson({
    name: 'Vasya',
    age: 12,
});
const worker = workWithPerson({
    name: 'Sergey',
    type: 'usual',
});
//# sourceMappingURL=generics.js.map