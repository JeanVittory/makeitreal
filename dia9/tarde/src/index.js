import { writeFile } from 'fs';
import { namesGenerator } from './faker/index.js';

const names = JSON.stringify(namesGenerator(1000), null, 1);
const formatedNames = names.replace(/["[]]/g, '');

writeFile('./test.txt', formatedNames, (error) => {
	if (error) console.log(error);
});

console.log('process finished');
