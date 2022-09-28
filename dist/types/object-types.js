"use strict";
/**
 *
 */
// В жс всі об'єкти: функції, об'єкти, масиви, в ітозі наслідуються від глобального об'єкта
const obj = {
    user: 1,
};
// obj.user = 2; // Пише, що такого нема :)
// А методи працюють:
obj.valueOf;
obj.toString;
// Інше визначення об'єкту:
const user4 = {
    name: 'Ihor',
    surname: 'Neizvestnyi',
    height: 177,
};
// Тепер ми не можемо додати властивість, або записати інший тип у властивість:
// user4.name = 69876;
// user4.name2 = 69876;
user4.weight = 65;
//# sourceMappingURL=object-types.js.map