// Generics <Type> - Прокидуємо тип або інтерфейс при виклику функції
// Дінамічне задавання типу в функцію
// Можемо передавати декілька дженериків:
// <UserParams, Type, string, number>
// І потім відповідно при виклику функції їх передавати <{}, UseS, 'fgf', 99 >()

interface UseS {
	name: string;
	surname: string;
}

interface Articles {
	title: string;
	author: string;
	content: string;
}

interface Params {
	query: {}
}

const newUser: UseS = {
	name: 'Max',
	surname: 'Bruni',
}
const newArticle: Articles =  {
	title: 'string',
	author: 'string',
	content: 'string',
}

function makeRequest<Type>(url: string, data: Type, params?: Params): Type {
	let obj = {} as Type;
	return obj;
};

const myUser = makeRequest<UseS>('/getUsers', newUser);
const myArticles = makeRequest<Articles>('/getArticles', newArticle);

// Також можна використовувати в інтерфейсах:
interface Custom<T, I> {
	name: T;
	surname: string;
	type?: I,
}
const myCustom: Custom<number, string> = {
	name: 12,
	surname: 'Fadivi',
	type: 'record',
}

// В классах:
type CustomerTypes = 'new' | 'impulse' | 'angry' | 'happy';

class Customers<C> {
	type: C;
	name: string;

	constructor(type: C, name: string) {
		this.type = type;
		this.name = name;
	}
}

const customers = new Customers<CustomerTypes>('new', 'Nikita');

// В функціях з extends:

// Інтерфейс значення за замовчуванням:
interface defaultCustomer {
	name: 'Sergey',
	type: 'usual'
}

interface PersonsInfo {
	name: string;
}

// Т наслідується від PersonsInfo, за замовчуванням має значення defaultCustomer:
function workWithPerson<T extends PersonsInfo = defaultCustomer>(arg: T): string {
	return arg.name;
}

workWithPerson({
	name: 'Vasya',
	age: 12,
})

const worker = workWithPerson({
	name: 'Sergey',
	type: 'usual',
});