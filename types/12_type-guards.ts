// Створюємо перевірочну функцію, коли не знаємо що саме прийде, коли extend від одного до декількох інтерфейсів:

interface UserG {
	name: string;
}

interface Fish extends UserG {
	color: string;
}

interface Human extends UserG {
	speak(): void; 
}

const serverInfo: UserG = {
	name: 'Olena',
}

function isHuman(serverInfo: UserG): serverInfo is Human {
	return typeof (serverInfo as Human).speak === 'function';
}

if (isHuman(serverInfo)) {
	serverInfo.speak();
}