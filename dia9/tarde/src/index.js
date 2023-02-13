import { writeFile } from 'fs';
import { namesGenerator } from './faker/index.js';

const names = namesGenerator(10);

writeFile('./test.txt', names.toString().replace(/[,]/g, ''), (error) => {
	if (error) console.log(error);
});

console.log('process finished');
