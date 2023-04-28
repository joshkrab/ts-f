"use strict";
// Literal types:
let env = 'staging';
let env2 = 'development';
// В функції зпочатку валідуємо що прийшло, а після (): що повертає функція
function setEnv(myEnv) {
    return myEnv;
}
setEnv('production');
// Enums: Створення об'єкту ключів, за замовченням значення як індекси: 0, 1, 2...
var Env3;
(function (Env3) {
    Env3[Env3["development"] = 0] = "development";
    Env3[Env3["staging"] = 1] = "staging";
    Env3[Env3["production"] = 2] = "production";
})(Env3 || (Env3 = {}));
// Але можна задати конкретні значення:
var Env4;
(function (Env4) {
    Env4["development"] = "development";
    Env4[Env4["staging"] = 4] = "staging";
    Env4["production"] = "production";
})(Env4 || (Env4 = {}));
let env4 = Env4.production; // Задаємо значення тільки з цього об'єкту
function setEnv2(myEnv) {
    return myEnv;
}
setEnv2(Env4.staging);
// якщо написати перед enum const тоді в жс не буде описання об'єкту enam, а просто одне значення як змінна
// якщо не написати const тоді буде доволи складний опис об'єкту - самовизиваюча функція, визначаюча такий об'єкт
//# sourceMappingURL=literal-types-enums.js.map