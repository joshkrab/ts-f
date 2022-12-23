// На відміну від типу, дозволяє наслідуватись як класи:
interface userInfo {
	phone: number,
	email: string,
}

interface User extends userInfo{
	name: string | number | 'Max';
	readonly surname: string; // Дадали неможливість перезапису
	height?: number;
}

interface Customer {
	user: User,
	bill: number,
}

const customer: Customer = {
	user: {
		name: 'Egor',
		surname: 'Peret',
		phone: 98897987,
		email: 'lj;jl;lkj',
	},
	bill: 45,
}

// Приклад сінтаксісу:
interface Shape {
	color: string;
}
interface Square extends Shape {
	sideLenght: number;
}
let square = {} as Square;
square.color = 'blue';
square.sideLenght = 123;