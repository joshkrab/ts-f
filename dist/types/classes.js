"use strict";
// До класів в функціях конструкторах ми так описували методи - додавали в прототип:
// this це об'єкт, який потім буде створюватись:
// implements - підказує яки властивості треба описати в класі - тобто відповідати інтерфейсу
class ClassUser {
    // Також описуємо, що приймаємо в пропси:
    constructor(props) {
        this.surname = 'Litvinova';
        this.name = props.name;
        this.surname = props.surname;
        this.secretMessage = `${props.name} Secret message says Hello! :)`;
        this.secretMessage2 = `${props.name} Protected message says Hello! :)`;
    }
    printFullName() {
        console.log(`${this.name} ${this.surname}`);
    }
    returnFullName() {
        return `${this.name} ${this.surname}`;
    }
    printSecretMessage(password) {
        if (password === 123) {
            return this.secretMessage;
        }
        return null;
    }
}
const classUser = new ClassUser({
    name: 'Olena',
    surname: 'Litvinova',
});
classUser.printFullName();
class ClassCustomer extends ClassUser {
    constructor(props) {
        // Визиваємо конструктор батька і передаємо туди необхідні пропси:
        super({
            name: props.name,
            surname: props.surname,
        });
        this.bill = props.bill;
    }
    getBill() {
        // Достаємо protected властивість
        return `${this.secretMessage2} ${this.bill}`;
        // Або можна явно звернутися до супер - властивості батька, якщо ми перезаписати цю властивість:
        // Звернення до protected, якщо private - ми не зможемо її дістати з батька, тільки з поточного класу.
        // return `${super.secretMessage2} ${this.bill}`
    }
}
const classCustomer = new ClassCustomer({
    name: 'Ihor',
    surname: 'Neizvestnyi',
    bill: 123,
});
classCustomer.printFullName();
classCustomer.getBill();
//# sourceMappingURL=classes.js.map