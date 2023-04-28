// Any - not reccomended, how vanilla js
let test: any = 12;
test = ';lk';
test.map();

// Unknown - if we don't know what to expect
let test2: unknown = 23;
// test2.map(); // not able

// void - for functions that returns nothing
function f(arg: string, next: number): void { }

const f2 = (arg: string, next: number): void => {}
