/*
 *
 * Lección 04: JS Foundations
 * Control Flow
 *
 */

var powerOfTwo = number => {
	var base = 2;
	for (let i=0; i<number; i++)
	{
		base *= 2; // es igual a base=base*2
		console.log("dentro de for",base);
	}
	console.log("despues de for",base);

	return base;
};

console.log("afuera de la funcion",powerOfTwo(10));//1024

module.exports = powerOfTwo;//linea util para node
