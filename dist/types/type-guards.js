"use strict";
// Створюємо перевірочну функцію, коли не знаємо що саме прийде, коли extend від одного до декількох інтерфейсів:
const serverInfo = {
    name: 'Olena',
};
function isHuman(serverInfo) {
    return typeof serverInfo.speak === 'function';
}
if (isHuman(serverInfo)) {
    serverInfo.speak();
}
//# sourceMappingURL=type-guards.js.map