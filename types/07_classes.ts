// До класів в функціях конструкторах ми так описували методи - додавали в прототип:
// this це об'єкт, який потім буде створюватись:

// function UserF(props) {
// 	this.name = 'name',
//	this.age = props.age,
//  };

// UserF.prototype.getMethod = () => { }

// const userF = new UserF({
// 	age: 24,
// })

// Classes --------------------------------------------------------------------------------------------
// Тепер пропси приймає конструктор
interface IClassUser {
	name: string;
	surname: string;

	// Тут також можна описати метод, наприклад що буде вертати
	// і тоді в класі можна це не описувати:
	// returnFullName(): string;
}
// implements - підказує яки властивості треба описати в класі - тобто відповідати інтерфейсу
class ClassUser implements IClassUser { 
	// Можемо описати типи тут зпочатку:
	// Також можемо задати значення за замовчуванням:
	public name: string; // паблік - значення за замовченням, можна звертатись ззовні
	surname: string = 'Litvinova';
	private secretMessage: string; // Неможливо звертатися до приват властивості ззовні, не можемо взяти з прототипа
	protected secretMessage2: string; // Неможливо звертатися до протект властивості ззовні, можемо взяти з прототипа

	// Також описуємо, що приймаємо в пропси:
	constructor(props: IClassUser) {
		this.name = props.name;
		this.surname = props.surname;
		this.secretMessage = `${props.name} Secret message says Hello! :)`;
		this.secretMessage2 = `${props.name} Protected message says Hello! :)`;
	}

	printFullName(): void {
		console.log(`${this.name } ${this.surname}`);
	}

	returnFullName(): string {
		return `${this.name } ${this.surname}`;
	}

	printSecretMessage(password: number): string | null {
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

interface CustomerInt extends IClassUser{
	bill: number;
} 

class ClassCustomer extends ClassUser {
	bill!: number; // "!" - не обов'язково ініціалізувати

	constructor(props: CustomerInt) {
		// Визиваємо конструктор батька і передаємо туди необхідні пропси:
		super({
			name: props.name,
			surname: props.surname,
		});

		this.bill = props.bill;
	}

	getBill(): string {
		// Достаємо protected властивість
		return `${this.secretMessage2} ${this.bill}`
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