// @ts-check

// 1. Sumar valores de objeto
// Escribir una función que tome un objeto como argumento. Devuelve la suma de todos los valores de las propiedades del objeto.

/**
 *
 * @param {{[index: string]: number}} obj
 * @returns {number | string}
 */

const sumValues = (obj) => {
	if (!(typeof obj === 'object')) return 'the param should be an object';
	return Object.values(obj).reduce((initial, value) => (value += initial), 0);
};

console.log(sumValues(1));
console.log(sumValues({ a: 1, b: 2, c: 3 })); //6
console.log(sumValues({ j: 9, i: 2, x: 3, z: 4 })); // 18
console.log(sumValues({ w: 15, x: 22, y: 13 })); //50

// Recursión
// La sucesión Fibonacci es una secuencia infinita de números naturales.
// Los primeros son: 1 1 2 3 5 8 13 21 34 55 89 .... La secuencia comienza con 1 y 1.
// De ahí en adelante cada número se calcula con la suma de los dos anteriores.
// Escribe una función recurrente que calcule el número n de la secuencia (basado en 0). Por ejemplo:

/**
 *
 * @param {number} num
 * @returns {number}
 */

const fib = (num) => {
	if (num === 0 || num === 1) return 1;
	return fib(num - 1) + fib(num - 2);
};

console.log('---------fibonacci----------');
console.log(fib(1));
console.log(fib(1));
console.log(fib(4));
console.log(fib(5));
