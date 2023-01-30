// Comprobar si la propiedad existe en el objeto
// Escriba una función que tome un objeto (a) y
// un string (b) como argumento. Devuelva true si el
// objeto tiene una propiedad con la clave 'b'. Devuelva false de lo contrario.

const myFunction = (a, b) => {
	const result = Object.entries(a).find((i) => i[0] === b);
	if (!result || !result[1]) return false;
	return true;
};

console.log(myFunction({ a: 1, b: 2, c: 3 }, 'b')); // true
console.log(myFunction({ x: 'a', y: 'b', z: 'c' }, 'a')); // false
console.log(myFunction({ x: 'a', y: 'b', z: undefined }, 'z')); //false
