// Literal types:
let env: 'development' | 'staging' | 'production' = 'staging';
// Опис конкретних значень, але не рекомендується, краще писати типи:
// І потім їх вставляємо де треба

// Types: unions
type Env = 'development' | 'staging' | 'production';
type Envf = 'development' | 'staging' | number | {}; // Що завгодно
type myBool = true | false;

let env2: Env = 'development';

// Приклад:
function wrapInArray(obj: string | string[]) {
	if (typeof obj === 'string') {
		return [obj];
	} else {
		return obj;
	}
}

// В функції зпочатку валідуємо що прийшло, а після (): що повертає функція
function setEnv(myEnv: Env): Env {
	return myEnv;
}
setEnv('production');

// Enums: Створення об'єкту ключів, за замовченням значення як індекси: 0, 1, 2...
enum Env3 {
	development,
	staging,
	production
}
// Але можна задати конкретні значення:
enum Env4 {
	development = 'development',
	staging = 4,
	production = 'production'
}

let env4: Env4 = Env4.production; // Задаємо значення тільки з цього об'єкту

function setEnv2(myEnv: Env4): Env4 {
	return myEnv;
}
setEnv2(Env4.staging);

// якщо написати перед enum const тоді в жс не буде описання об'єкту enam, а просто одне значення як змінна
// якщо не написати const тоді буде доволи складний опис об'єкту - самовизиваюча функція, визначаюча такий об'єкт
