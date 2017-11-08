/*
 *
 * Lección 04: JS Foundations
 * Objetos preconstruidos
 *
 */

var isNumber = (numberArray) => {
	return /^\d+$/.test(numberArray);
}

console.log(isNumber('a'));

module.exports = isNumber;
