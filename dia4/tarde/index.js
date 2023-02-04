// 1. Devolver propiedad de objeto anidado
// Escribir una función que tome un objeto como argumento. En algunos casos, el objeto contiene otros objetos con algunas propiedades profundamente anidadas.
// Devuelve el valor de la propiedad 'b' del objeto 'a' dentro del objeto original si existe, si no, devuelve undefined.

console.log('********* ejercicio 1 *********');

const deepObject = (obj) => {
	if (!Object.keys(obj).length) return undefined;
	if (obj.b) return undefined;
	const checker = (obj) => {
		let key = 'b';
		if (obj.hasOwnProperty(key)) return obj[key];
		for (let i in obj) {
			if (checker(obj[i])) {
				return checker(obj[i]);
			} else {
				return undefined;
			}
		}
	};
	const result = checker(obj);
	return result;
};

console.log(deepObject({ a: 1 })); // undefined
console.log(deepObject({ a: { b: { c: 3 } } })); // 	{c:3}
console.log(deepObject({ b: { a: 1 } })); // undefined
console.log(deepObject({ a: { b: 2 } })); // 2

// 2. Fix Error: manipulación de arreglos
// ¡Ayuda a corregir todos los errores en la función incrementItems! ¡Está destinado a agregar 1 a cada elemento en el arreglo!

function incrementItems(arr) {
	let arrIncrement = [];
	for (let i = 0; i < arr.length; i++) {
		arrIncrement.push(arr[i] + 1);
	}
	return arrIncrement;
}

console.log('********* ejercicio 2 *********');

console.log(incrementItems([0, 1, 2, 3])); //[1, 2, 3, 4]
console.log(incrementItems([2, 4, 6, 8])); // [3, 5, 7, 9]
console.log(incrementItems([-1, -2, -3, -4])); // [0, -1, -2, -3]

// 3. Fix Error: Valor vs. Referencia de Tipos
// Cree una función que devuelva true si dos arreglos contienen valores idénticos y false en caso contrario.

// Para resolver esta pregunta, tu amigo escribe el siguiente código:

function checkEquals(arr1, arr2) {
	let newArr = [];
	for (let i = 0; i < arr1.length; i++) {
		if (arr1[i] !== arr2[i]) {
			newArr.push(false);
		} else {
			newArr.push(true);
		}
	}

	return !newArr.includes(false);
}

console.log('********* ejercicio 3 *********');

console.log(checkEquals([1, 2], [1, 3])); //false
console.log(checkEquals([1, 2], [1, 2])); // true
console.log(checkEquals([4, 5, 6], [4, 5, 6])); //true
console.log(checkEquals([4, 7, 6], [4, 5, 6])); // false
console.log(checkEquals([4, 7, 6], [4, 6, 7])); // false
