import { faker } from '@faker-js/faker';

export const namesGenerator = (num) => {
	const names = [];
	Array.from({ length: num }).forEach(() => {
		names.push(faker.name.fullName() + '\n');
	});

	return names;
};
