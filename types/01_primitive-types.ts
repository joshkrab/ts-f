/**
 * Primitive types:
 * boolean
 * string
 * number
 * symbol
 * bigint - const bigInteger = 123456789123456789n; for long numbers: from -9007199254740991 to 9007199254740991
 * null
 * undefine
 */

let numb = 10; // ТС сам зазначить, що тип намбер, та потім буде повідомляти якщо хочемо перезаписати на рядок:
numb = 11;
// Теж саме з рядком і тд:
let str = 'string';
let isNormal = false;
// Можемо зазначати тип явно, але такі значення визначаються самі:
let booleanToo: boolean = true;

// null & undefine -----------------------------------------------------------------------------------------------------------

const user = {
	name: 'Elena',
	surname: 'Litvinova',
	birthday: null,
}

// Коли значення зовсім не визначено, воно undefine, але тс не визначає одразуа тип та пише any
let user2 = null; 
let user3 = undefined; 

// Зазначаєм тип: ts вже підписує тип
let myNull: null = null;
let myUndefine: undefined = undefined;

let mySymbol = Symbol('ket');
let myBigInt = 77987987987987n;