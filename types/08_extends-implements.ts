interface Person {
	name: string;
	surname?: string; // '?' - Не обов'язково додавати - Not necessarily - question mark
}

interface PersonInfo {
	birthday: string;
	age: number;
}

interface UserEx extends Person, PersonInfo {
	height: number;
}

const someUser: UserEx = {
	name: 'Alex',
	surname: 'Petrov',
	birthday: '543',
	age: 33,
	height: 167,
}

// Classes can only extend a single class!
// Classes can implement multiple interfaces or other classes!

// class UserIm implements Person, PersonInfo {}