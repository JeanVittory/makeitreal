// Escribir una función que tome dos fechas como argumentos.
// Devuelve true si las fechas caen exactamente en el mismo día, false si no.

const dateMatcher = (dateX, dateY) => {
	if (!dateX || !dateY) throw new Error('empty values');
	if (!(dateX instanceof Date) || !(dateY instanceof Date))
		throw new Error('valueX or valueY are not a date');

	return dateX.valueOf() === dateY.valueOf();
};

//test cases
console.log(dateMatcher(new Date(2019, 0, 1), new Date(2019, 0, 1))); //true
console.log(dateMatcher(new Date('2020/01/01'), new Date('2020/01/02'))); //false
console.log(dateMatcher(new Date(2019, 0, 1), new Date(2019, 1, 1))); // false
console.log(dateMatcher(new Date('2000/01/01'), new Date('2000/01/01'))); // true
console.log(dateMatcher(new Date(2019, 00, 1), new Date('2019/01/1')));
