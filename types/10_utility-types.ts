interface Accomodation {
	title: string;
	location?: string;
	address: string;
	countOfRooms: number;
};

// Коли хочемо взяти не усі властивості з інтерфейсу, якщо в нас чогось не вистачає:
const myAccomodation: Pick<Accomodation, 'title' | 'address'> = {
	title: 'go',
	address: 'rrr'
}

// Коли хочемо взяти не усі властивості з інтерфейсу - навпаки вказуюємо які не брати:
const myAccomodation2: Omit<Accomodation, 'title' | 'address'> = {
	location: 'go',
	countOfRooms: 12,
}

const myFloatAccom: Partial<Accomodation> = {}; // Усі властивості не обов'язкові
const myReqAccom: Required<Accomodation> = {
	title: 'string',
	location: 'string',
	address: 'string',
	countOfRooms: 11,
}; // Усі властивості не обов'язкові, навіть які ? в інтерфейсі

// Задаємо двома об'єктами ключі/значення для нового об'єкта:
interface CatInfo {
	age: number;
	breed: string;
};
type CatName = 'miffy' | 'boris' | 'mordred'; // Мають бути усі вказані

const cats: Record<CatName, CatInfo> = {
	miffy: {age: 12, breed: 'pink'},
	boris: {age: 12, breed: 'pink'},
	mordred: {age: 12, breed: 'pink'},
}

// Масиви: різні типи створення:
const arrr: number[] = [1,2,5]; 
const arrr2: Array<number> = [1,2,5]; 
const arrr3: ReadonlyArray<number> = [1, 2, 5]; // Не зможемо змінювати

