import { faker } from '@faker-js/faker';

export const namesGenerator = (num) => {
	const names = [];
	for (let i = 1; i <= num; i++) {
		names.push(faker.name.fullName() + '\n');
	}

	return names;
};
